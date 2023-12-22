const C_BREAKPOINT = 1300;
let cSwiper;

$(document).ready(function () {
    const deviceWidth = $(window).width();

    deviceWidth >= C_BREAKPOINT && cSwiperInit();

    $(window).on('resize', function () {
        var dWidth = $(this).width();

        if (dWidth >= C_BREAKPOINT) {
            !cSwiper && cSwiperInit();
        } else {
            cSwiper && cSwiperDestroy();
        }
    });
});

function cSwiperInit() {
    cSwiper = new Swiper('#collections-slider', {
        direction: 'horizontal',
        slidesPerView: 'auto',
        spaceBetween: 40,
        navigation: {
            nextEl: '.collections-arrow--right',
            prevEl: '.collections-arrow--left',
        },
    });
}

function cSwiperDestroy() {
    cSwiper && cSwiper.destroy();
    cSwiper = undefined;
}
