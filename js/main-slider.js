
let Owl = {

    init: function () {
        Owl.carousel();
    },

    carousel: function () {
        let owl;
        $(document).ready(function () {

            owl = $('.main-slider').owlCarousel({
                items: 1,
                lazyLoad: true,
                nav: false,
                dotsEach: true,
                autoplay: false,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                smartSpeed: 1000,
                loop: true,
            });

            $('.slide-number').on('click', 'span', function (e) {
                owl.trigger('to.owl.carousel', [$(this).index(), 1000]);
            });
            // let dot = $(".owl-dot"),
            //     numbers = $(".slide-number span");
            // $.each(dot,function(index){
            //     if ($(this).hasClass("active")) {
            //         numbers.eq(index).addClass('active-slider-number');
            //     }
            // })
        });
    }
};

$(document).ready(function () {
    Owl.init();
});

// let dot = document.querySelectorAll('.owl-item'),
//     number = document.querySelectorAll('.slide-number span');
//     console.log(number)
//     console.log(dot)
// activeSliderNumber();

// function activeSliderNumber() {
//     for (let i = 0; i < dot.length; i++) {
//         if (dot[i].classList.contains('active')) {
//             number[i].classList.add('active-number')
//         }
//     }
// }








