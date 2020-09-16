$(document).ready(function(){    
<<<<<<< HEAD
    $('#carouselD').slick({
        
        
=======
    /*$('#carouselDa').slick({
        
        infinite: true,
>>>>>>> master
    
        slidesToShow: 3,

        slideToScroll: 1,

        centerMode:true,
        
<<<<<<< HEAD
        prevArrow: $('#left-arrowa'),
        nextArrow: $('#right-arrowa'),
=======
        prevArrow: $('#left-arrow'),
        nextArrow: $('#right-arrow'),
>>>>>>> master
    


    
<<<<<<< HEAD
    });
=======
    });*/
>>>>>>> master

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
