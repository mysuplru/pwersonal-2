$(document).ready(function() {

    $(function () {
        $('#myTab li:first-child a').tab('show')
    });

    $(function() {
        $(".owl-carousel").owlCarousel();
    });

    $('.new-order .owl-carousel').owlCarousel({
        loop:false,
        navText : ["",""],
        nav:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
           320:{
                items:1,
                nav:true
            },
            480:{
                items:1.5,
                nav:true
            },

            1000:{
                items:3,
                nav:true
            },

            1170:{
                items:3,
                nav:true
            }
        }
    });

    $('.owl-carousel').owlCarousel({
        margin:30,
        loop:false,
        autoWidth:true,
        items:1

    });


    $(".input__block").on("click", function(){
        $(this).find('.example').addClass("example-active");

    });



    $('ul.navbar li a').on('click', function(){
        $('ul.navbar a.active').removeClass('active');
        $(this).addClass('active');
    });

    $('ul.navbar-index li a').on('click', function(){
        $('ul.navbar a.active-white').removeClass('active-white');
        $(this).addClass('active-white');
    });

    $(".my-img").on("click", function() {
        $(this).toggleClass("my-img-active");

    })

});

$('.close-btn').on('click', function(){
    $(this).closest('.hideme').hide();
});

