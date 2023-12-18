// const BREAKPOINT = 1300;
// let swiper;

// $(document).ready(function () {
//     const deviceWidth = $(window).width();

//     deviceWidth >= BREAKPOINT && swiperInit();

//     $(window).on('resize', function () {
//         var dWidth = $(this).width();

//         if (dWidth >= BREAKPOINT) {
//             !swiper && swiperInit();
//         } else {
//             swiper && swiperDestroy();
//         }
//     });
// });

// function swiperInit() {
//     swiper = new Swiper('.swiper', {
//         direction: 'vertical',
//         loop: true,
//         slidesPerView: 3,
//         spaceBetween: 42,
//         freeMode: true,
//         navigation: {
//             nextEl: '.card-next',
//             prevEl: '.card-prev',
//         },
//     });
// }

// function swiperDestroy() {
//     swiper && swiper?.destroy();
//     swiper = undefined;
// }
