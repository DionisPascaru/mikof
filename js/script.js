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

$('#search-btn').on('click', function(){
    $('#search-field').toggleClass('active');
});

// header search button
$('#mobile-search-btn').on('click', function(){
    $("#mobile-search-field").toggleClass('active');
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
                arrows: false,
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
    autoplay: true,
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

