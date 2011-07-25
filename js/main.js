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
        links.empty();
        body.html('<p>' + currentSlide.body + '</p>');
        caption.html('&quot;' + currentSlide.caption + '&quot;');
        title.text(currentSlide.title);
        metaList.find('li:first-child').text('by ' + currentSlide.author);
        metaList.find('li:nth-child(2)').text('category: ' + currentSlide.category);
        
        if(currentSlide.links) {
            links.append('<li>Links to check out:</li>');
            for (var i=0, j=currentSlide.links.length; i<j; i++) {
                var link = currentSlide.links[i];
                links.append('<li><a href="' + link + '">' + link + '</a></li>');
            }
        }
        
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