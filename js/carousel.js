$(document).ready(function(){    
    $('#carouselD').slick({
        
        
    
        slidesToShow: 3,

        slideToScroll: 1,

        centerMode:true,
        
        prevArrow: $('#left-arrowa'),
        nextArrow: $('#right-arrowa'),
    


    
    });

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
