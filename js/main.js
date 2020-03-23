$(document).ready(function(){


    $('.main-menu .arrow').click(function(){
        $(this).parent().toggleClass('show');
        $(this).next().slideToggle();
    });

    $('.mm-btn').click(function () {
        $('.header-menu-block').toggleClass('open');
        $('html').toggleClass('page-noscroll');

        $('.mm-close').click(function () {
            $('.header-menu-block').removeClass('open');
            $('html').removeClass('page-noscroll');
        });
        return false;
    });

    $(document).on('click', function(e) {
        if (!$(e.target).closest(".main-menu").length) {
            $(".header-menu-block.open").removeClass('open');
            $("html").removeClass('page-noscroll');
        }
        e.stopPropagation();
    });

    if($('.history-list__slider > div').length >2){
        $('.history-list__slider').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            dots:false,
            vertical: true,
            verticalSwiping:true,
        });
    }


    if($('.work-slider > div').length >1){
        $('.work-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            dots:false,
            responsive: [

                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }


    if($('.team-slider > div').length >1){
        $('.team-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            dots:false,
            responsive: [

                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }


    let custom_slider=$('.custom-slider');
    if($(custom_slider).length >1){
        $(custom_slider).slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            dots:false,
            responsive: [

                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 2,
                    }
                }
            ]
        });
    }


    let about_slider=$('.about-product__slider');

    $(about_slider).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots:false,
       // asNavFor: about_slider_nav,
    });






    $('.file').filestyle({
        text : 'Прикрепить файл\n' +
            '(word, exel,pdf, jpg,png)',
        dragdrop: false,
    });


    let gallery_project__vertical= $('.gallery-project__vertical');
    let gallery_project__horizontal=$('.gallery-project__horizontal');
    $(gallery_project__vertical).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots:false,
        vertical: true,
        verticalSwiping:true,
        infinite: false,
        prevArrow:"<button type='button' class='slick_prev'><i></i><span>Предыдущий проект</span></button>",
        nextArrow:"<button type='button' class='slick_next '><i ></i><span>Следующий проект</span></button>",
    });
    $(gallery_project__horizontal).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots:false,
    });


    $('.prev-project').click(function(){
        $(gallery_project__vertical).slick('slickPrev');
    });

    $('.next-project').click(function(){
        $(gallery_project__vertical).slick('slickNext');
    });


    $('.choose_btn').click(function(){
        $(this).parent().toggleClass('act');
    });


    $('.size-selection__list').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        dots:false,
        centerMode: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    });


    $('.size_prev').click(function(){
        $('.size-selection__list').slick('slickPrev');
    });

    $('.size_next').click(function(){
        $('.size-selection__list').slick('slickNext');
    });


    $('.right-vertical__list').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        dots:false,
        vertical:true,
        centerMode: true,
        focusOnSelect: true
    });


    $('.right_prev').click(function(){
        $('.right-vertical__list').slick('slickPrev');
    });

    $('.right_next').click(function(){
        $('.right-vertical__list').slick('slickNext');
    });




});


