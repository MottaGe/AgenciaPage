$(document).ready(function(){    
    /*$('#carouselDa').slick({
        
        infinite: true,
    
        slidesToShow: 3,

        slideToScroll: 1,

        centerMode:true,
        
        prevArrow: $('#left-arrow'),
        nextArrow: $('#right-arrow'),
    


    
    });*/

    $('#carouselDm').slick({
        
        infinite: true,
    
        slidesToShow: 3,

        slideToScroll: 1,

        centerMode:true,
        
        prevArrow: $('#left-arrow'),
        nextArrow: $('#right-arrow'),
    


    
    });

    $('#carouselDm').on('afterChange', function(){
        console.log ("mudou")
    });
});
