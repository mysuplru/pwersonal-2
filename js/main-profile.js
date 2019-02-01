
$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });


    $('ul.list-unstyled li a').on('click', function(){
        $('ul.list-unstyled a').removeClass('active-nav');
        $(this).addClass('active-nav');
    });



    $(function () {
        $('#profile-tabs li:first-child a').tab('show')
    });


    $(".input__block").on("click", function(){
        $(this).find('.example').addClass("example-active");

    });


    // $('.hide-btn').on('click', function(e){
    //     e.preventDefault();
    //
    //     var
    //         $this = $(this),
    //         content = $(this).parents('.del-body').find('.del-product');
    //
    //     if(!$this.hasClass('show')){
    //         $this.toggleClass('show');
    //         content.slideDown();
    //     }
    //
    //     $('.del-product_close').on('click', function(){
    //         $this.removeClass('show');
    //         content.slideUp();
    //     });
    // });

    $('.hide-btn').on('click', function(e){
        e.preventDefault();

        var
            $this = $(this),
            content = $(this).parents('.del-body').find('.del-product');

        if(!$this.hasClass('show')){
            $this.toggleClass('show');
            content.slideDown();
        }

        $('.del-product_close').on('click', function(){
            $this.removeClass('show');
            content.slideUp();
        });
    });




    $('#edit').on('click', function () {
        $('.edit_block').find("input").removeAttr("disabled");
        $('#edit').hide();
        $('#save').show();

        });

    $('#save').on('click', function () {
        $('.edit_block').find("input").attr('disabled', 'true');
        $('#save').hide();
        $('#edit').show();
    })



});