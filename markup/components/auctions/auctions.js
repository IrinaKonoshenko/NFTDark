const A_BREAKPOINT = 1300;
let aSwiper;

$(document).ready(function () {
    const deviceWidth = $(window).width();

    deviceWidth >= A_BREAKPOINT && aSwiperInit();

    $(window).on('resize', function () {
        var dWidth = $(this).width();

        if (dWidth >= A_BREAKPOINT) {
            !aSwiper && aSwiperInit();
        } else {
            aSwiper && aSwiperDestroy();
        }
    });
});

function aSwiperInit() {
    aSwiper = new Swiper('#auctions-slider', {
        direction: 'horizontal',
        slidesPerView: 'auto',
        spaceBetween: 40,
        navigation: {
            nextEl: '.auctions-arrow--right',
            prevEl: '.auctions-arrow--left',
        },
    });
}

function aSwiperDestroy() {
    aSwiper && aSwiper.destroy();
    aSwiper = undefined;
}
