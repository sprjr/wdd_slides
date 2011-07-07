$(function(){

var slidesLoaded = function(data) {
	slides = data;
    
	for (var doc in slides.rows) {
        alert( slides.rows[doc].id );
	}
};
		
var loadSlides = function(slidesUrl) {
    alert('loading slides...');
    
    $.getJSON(slidesUrl, function(data, textStatus, jqXHR){
       alert('items loaded'); 
    }).error(function(){
        alert('le error');
        });
    
    /* testing getJSON instead...
	$.ajax({
		url: slidesUrl,
		dataType: 'json',
		success: function(ajax) { 
            slidesLoaded(ajax);
		},
        error: function(ajax) {
            alert('error' + ajax);
        }
    }); */
};

loadSlides('https://sprjr.cloudant.com/wdd_slides/_design/slides/_view/all');    

});