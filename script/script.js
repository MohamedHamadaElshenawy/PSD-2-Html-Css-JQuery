$(function(){
    'use strict';
    
    //trigger a nice scroll plugin
    $("body").niceScroll({
        cursorcolor: "#FF6A0C",
        cursorwidth:"7.5px",
        cursorborder: "1px solid #FF6A0C",
        cursorborderradius: "0"
    });
    
    //intilaize the header height
    $(".header").height($(window).height());
    
    //intialize hire us button to move to our-team section when clicked
    $(".hire").click(function(){
        $("html, body").animate({
            scrollTop: $(".our-team").offset().top
        },1000);
    });
    
    //intialize our work button to move to our-work section when clicked
    $(".work").click(function(){
        $("html, body").animate({
            scrollTop: $(".our-work").offset().top 
        },1000);
    });
    
    //intialize arrow to move to features when clicked
    $(".circle").click(function(){
        $("html, body").animate({
            scrollTop: $(".features").offset().top
        },1000);
    });
    
    //Show info of project when hovered
    $(".our-work .box").hover(function(){
        $(this).children(".over, .info").fadeIn(400);
    },function(){
        $(this).children(".over, .info").fadeOut(300);
    });
    
    //check function for the testimonils slider
    function check(){
        //check if the slide first one
        if($(".slide:first").hasClass("active")){
            $(".fa-chevron-left").fadeOut();
        }else{
            $(".fa-chevron-left").fadeIn();
        }
        //check if the slide last one
        if($(".slide:last").hasClass("active")){
            $(".fa-chevron-right").fadeOut();
        }else{
            $(".fa-chevron-right").fadeIn();
        }
    }
    check();
    
    // make the arrows move the slides
    $(".testimonials i").click(function(){
        if($(this).hasClass("fa-chevron-right")){
            $(".active").fadeOut(500,function(){
                $(this).removeClass("active").next(".slide").fadeIn(1000).addClass("active");
                check();
            });
        }else{
            $(".active").fadeOut(500,function(){
                $(this).removeClass("active").prev(".slide").fadeIn(1000).addClass("active");
                check();
            });
        }
    });
    
    
});