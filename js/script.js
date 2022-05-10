$(document).ready(function () {
    // menu button
    let menuBtn = $('#collapse-btn');
    menuBtn.on('click', function () {
        $(this).toggleClass('open');
    });

    // descktop collapse-menu
    let deskMenuBtn = $('#desk-collapse-btn');
    deskMenuBtn.on('click', function () {
        $(this).toggleClass('open');
        $('.navbar-bootom').toggleClass('open');
    });

    // header search button
    $('#search-btn').click(function () {
        $('#nav').addClass('hide');
        $('#search-field').addClass('active');
        setTimeout(() => {
            $('#search-input').focus();
            $('#search-field').css("border-color", "#0094d6");
        }, 500)
    });

    $(document).click(function (e) {

        if (e.target.id != 'search-btn' && e.target.id != 'search-input') {
            if (e.target.id != 'submit-btn') {
                $('#nav').removeClass('hide');
                $('#search-field').removeClass('active');
                $('#search-field').css("border-color", "#c3c3c3");
            }
        }
    })

    // mobile search button
    $('#mobile-search-btn').click(function () {
        if ($("#mobile-search-btn span").hasClass('icon-loupe')) {
            $(".search-tab span").removeClass('icon-loupe').addClass('icon-add');
            $(".search-tab").css("transform", "rotate(45deg)");
        } else {
            $(".search-tab span").removeClass('icon-add').addClass('icon-loupe');
            $(".search-tab").css("transform", "rotate(0deg)");
        }

        $('#mobile-search-field').toggleClass('active');
        if (!$(this).hasClass('active')) {
            $('#mobile-search-input').trigger("focus");
        }

    });

    // slick carousel
    $('#slider-carousel').slick({
        arrows: true,
        slidesToShow: 4,
        autoplay: true,
        responsive: [
            {
                breakpoint: 430,
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                    autoplay: 2000
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: true
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    arrows: true
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    arrows: true
                }
            }
        ]
    });

    $('#dots-slider').slick({
        arrows: true,
        slidesToShow: 3,
        dots: true,
        // autoplay: true,
        responsive: [
            {
                breakpoint: 430,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    arrows: true
                }
            }
        ]
    })

    // show doctor details on hover select item
    $('#doctors li').mouseover(function () {
        let id = $(this).attr('id');

        $(`#doctor${id}`).addClass('visible');
    });

    $('#doctors li').mouseout(function () {
        $('.card').removeClass('visible');
    });


    // get selected doctor 
    $('#doctors li').click(function () {
        let value = $(this).text();
        $('#labelId').text(value);
    });
});