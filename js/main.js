$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $(".scrolltop-btn").removeClass("footer__scrolltotop--hide");
    } else {
        $(".scrolltop-btn").addClass("footer__scrolltotop--hide");
    }
});


$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 500) {
        $(".header").addClass("header--sticky");
    } else {
        $(".header").removeClass("header--sticky");
    }
});

$("#side-nav__tag").click(function(){
    $(".side-nav__tag").toggleClass("side-nav__tag--expanded");
    $("#side-nav-overview").toggleClass("side-nav__body--expanded");
});
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:6
        },
        1000:{
            items:9
        }
    }
})