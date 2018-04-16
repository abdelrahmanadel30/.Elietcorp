$(function () {
    'use strict';
    var upperh = $('.upper-nav').innerHeight(),
        nav = $('.navbar-expand-lg').innerHeight(),
        winh = $(window).height();

    $('.slider, .carousel-item').height(winh - (upperh + nav));


    //ul li shuffle
    $('.Featured ul li').on('click', function () {

        $(this).addClass('active').siblings().removeClass('active');


        if ($(this).data('class') === 'all') {

            $('.shulff-image .col-md').css('opacity', '1');

        } else {

            $('.shulff-image .col-md').css('opacity', '.09');
            $($(this).data('class')).parent().css('opacity', '1');
        }


    });


    $(".skitter-large").skitter();

    $('.fuuny').funnyText({
        speed: 500,
        borderColor: '#08526d',
        activeColor: '#08526d',
        color: '#08526d',
        fontSize: '7em',
        direction: 'both'

    });

    $('.myheading').funnyText({
        speed: 500,
        borderColor: '#08526d',
        activeColor: '#08526d',
        color: '#08526d',
        fontSize: '7em',
        direction: 'both'

    });

    $('.timer').countTo();
    $(".vid").fitVids();

 
    
    $(".nav-link").click(function(){
   
        $("html , body").animate({
         scrollTop:$('#' + $(this).data('vaule')).offset().top
         
         },1000);
    
    
    
 
    
  
  
  });
    $(".type").typed({
    typeSpeed: 20,
    startDelay: 100,  
  
  });
    

    
});