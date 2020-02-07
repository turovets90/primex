$(document).ready(function(){


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

    let about_slider_nav=$('.about-product__slider_nav');
    $(about_slider).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots:false,
        asNavFor: about_slider_nav,
    });


    $(about_slider_nav).slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: about_slider,
        dots: false,
        arrows: false,
        //centerMode: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
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




    /*
        $(document).ready(function(){
            $('.file').filestyle({
                text : 'Прикрепить файл',
                dragdrop: false,
            });
        });

        $('.mm_btn').on('click',function () {
            $(this).toggleClass('act');
            $('.main_menu').toggleClass('open');
            $('html').toggleClass('page-noscroll');
            return false;
        });

        $(document).on('click', function(e) {
            if (!$(e.target).closest(".main_menu.open").length) {
                $(".mm_btn").removeClass('act');
                $(".main_menu.open").removeClass('open');
                $("html").removeClass('page-noscroll');
            }
            e.stopPropagation();
        });

        $('.main_menu .arrow').on('click',function () {
            $(this).toggleClass('act');
            $(this).next().slideToggle();
            return false;
        });


        if($('.main_slider > div').length >1){
            $('.main_slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots:true,
                //fade:true,
                //autoplay: true,
                //speed: 1000,
                //autoplaySpeed:9000,
            });
        }


        if($(window).innerWidth() < 575){
            if($('.products_slider > div').length >1){
                $('.products_slider').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    dots:false,
                });
            }
        }


        if($('.akcii_slider > div').length >4){
            $('.akcii_slider').slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: true,
                dots:false,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 3,
                        }
                    },
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


        if($('.akcii_slider2 > div').length >4){
            $('.akcii_slider2').slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: true,
                dots:false,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 3,
                        }
                    },
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


        if($('.products_slider > div').length >4){
            $('.products_slider').slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: true,
                dots:false,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 3,
                        }
                    },
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




        $('.read_more').click(function(){
            $(this).hide();
            $(this).prev().slideDown();
        });



        if($(window).innerWidth() < 1200){
            if($('.related_posts > div').length >3){
                $('.related_posts').slick({
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
        }


        $('.jobs_item').each(function(){
            var j_text=$(this).find('.text');
            var j_item_desc=$(this).find('.jobs_item_desc');
            $(j_text).click(function(){
                $(j_text).toggleClass('act');
                $(j_item_desc).slideToggle();
            });
        });



        if($('.gallery_slider > div').length >2){
            $('.gallery_slider').slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true,
                dots:false,
                responsive: [
                    {
                        breakpoint: 575,
                        settings: {
                            slidesToShow: 1,
                        }
                    }
                ]
            });
        }



        ymaps.ready(init);

        function init () {
            var map = new ymaps.Map('shops_map', {
                    center: [53.730339, 28.901889],
                    zoom: 7
                }, {
                    searchControlProvider: 'yandex#search'
                }),
                counter = 0,

                // Создание макета содержимого балуна.
                // Макет создается с помощью фабрики макетов с помощью текстового шаблона.
                BalloonContentLayout = ymaps.templateLayoutFactory.createClass(
                    '<div class="content_baloon">' +
                    '<p class="title">ТЦ "Atakent Mall<br> г. Минск, ул. Тимирязева, д.42</p>' +
                    '<a href="tel:+375 (17) 364-26-11" class="phone">+375 (17) 364-26-11</a> ' +
                    '<div class="work"> пн.-пт.: 10:00-22:00<br> сб-вс.: 10:00-22:00</div>' +
                    '</div>');

            var placemark = new ymaps.Placemark([53.904024, 27.552342], {
                name: 'Считаем'
            }, {
                balloonContentLayout: BalloonContentLayout,
                // Запретим замену обычного балуна на балун-панель.
                // Если не указывать эту опцию, на картах маленького размера откроется балун-панель.
                balloonPanelMaxMapArea: 0
            });



            map.geoObjects.add(placemark);

        }



    /*


        function init () {
            var myMap = new ymaps.Map('shops_map', {
                    center: [55.76, 37.64],
                    zoom: 10
                }, {
                    searchControlProvider: 'yandex#search'
                }),
                objectManager = new ymaps.ObjectManager({
                    clusterize: true
                });

            myMap.geoObjects.add(objectManager);

            $.ajax({
                url: "data.json"
            }).done(function(data) {
                objectManager.add(data);
                // Откроем балун на метке с id == 1.
                var objectState = objectManager.getObjectState(1);
                if (objectState.isClustered) {
                    // Сделаем так, чтобы указанный объект был "выбран" в балуне.
                    objectManager.clusters.state.set('activeObject', objectManager.objects.getById(1));
                    // Все сгенерированные кластеры имеют уникальные идентификаторы.
                    // Этот идентификатор нужно передать в менеджер балуна, чтобы указать,
                    // на каком кластере нужно показать балун.
                    objectManager.clusters.balloon.open(objectState.cluster.id);
                } else {
                    objectManager.objects.balloon.open(1);
                }
            });

        }

    */

});


