const BREAKPOINT = 1300;
let swiper;

$(document).ready(function () {
    const deviceWidth = $(window).width();

    deviceWidth >= BREAKPOINT && swiperInit();

    $(window).on('resize', function () {
        var dWidth = $(this).width();

        if (dWidth >= BREAKPOINT) {
            !swiper && swiperInit();
        } else {
            swiper && swiperDestroy();
        }
    });
});

function swiperInit() {
    swiper = new Swiper('#auctions-slider', {
        direction: 'horizontal',
        slidesPerView: 'auto',
        spaceBetween: 40,

        navigation: {
            nextEl: '.auctions-arrow--right',
            prevEl: '.auctions-arrow--left',
        },
    });
}

function swiperDestroy() {
    swiper && swiper?.destroy();
    swiper = undefined;
}
