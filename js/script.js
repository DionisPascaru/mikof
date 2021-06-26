// menu button
let menuBtn = $('#collapse-btn');
menuBtn.on('click', function () {
    $(this).toggleClass('open');
})

// slick carousel
$('#slider-carousel').slick({
    arrows: true,
    slidesToShow: 4,
    responsive: [
        {
            breakpoint: 578,
            settings: {
                slidesToShow: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 922,
            settings: {
                slidesToShow: 3
            }
        }
    ]
});

$('#dots-slider').slick({
    arrows: true,
    slidesToShow: 3,
    dots: true,
    responsive: [
        {
            breakpoint: 578,
            settings: {
                slidesToShow: 1,
                arrows: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                arrows: false
            }
        }
    ]
})