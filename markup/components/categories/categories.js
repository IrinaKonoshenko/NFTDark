const CA_BREAKPOINT = 1300;
let caSwiper;

$(document).ready(function () {
    const deviceWidth = $(window).width();

    deviceWidth >= CA_BREAKPOINT && caSwiperInit();

    $(window).on('resize', function () {
        var dWidth = $(this).width();

        if (dWidth >= CA_BREAKPOINT) {
            !caSwiper && caSwiperInit();
        } else {
            caSwiper && caSwiperDestroy();
        }
    });
});

function caSwiperInit() {
    caSwiper = new Swiper('#categories-slider', {
        direction: 'horizontal',
        slidesPerView: 'auto',
        spaceBetween: 40,
        autoplay: {
            delay: 5000,
        },
    });
}

function caSwiperDestroy() {
    caSwiper && caSwiper.destroy();
    caSwiper = undefined;
}
