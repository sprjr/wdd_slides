var slides = {},
    idList = [],
    current = 0;

var initSlides = function(data) {
    slides = data;
    
    for (var slide in slides) {
        idList.push(slide);
    }
};

var loadSlide = function() {
    var body = $('.slide-body'),
        caption = $('.slide-caption p'),
        title = $('#slideshow h1'),
        metaList = $('.slide-meta'),
        links = $('.slide-links'),
        currentSlide = slides[idList[current]],
        slideShow = $('#slideshow');
        
    slideShow.animate({opacity: 0}, function(){
        body.html('<p>' + currentSlide.body + '</p>');
        caption.html('&quot;' + currentSlide.caption + '&quot;');
        title.text(currentSlide.title);
        slideShow.animate({opacity: 1});
    });
}

$(function(){
    
    $('#slideshow h1').fitText();
    
    loadSlide();
    
    $('a[href="previous"]').bind('click', function(){
        current = (current == 0)? idList.length-1 : current-1;
        loadSlide();
        return false;    
    });
    
    $('a[href="next"]').bind('click', function(){
        current = (current == idList.length-1)? 0 : current+1;
        loadSlide();
        return false;
    });
    
    $('a[href="start-over"]').bind('click', function(){
        current = 0;
        loadSlide();
        return false;
    });
    
});