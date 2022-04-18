$(document).ready(function() {
    // //閃光
    // $("canvas.flare").let_it_snow({
    //     windPower: 0,
    //     speed: 0,
    //     color: "#392F52",
    //     size: 120,
    //     opacity: 0.00000001,
    //     count: 40,
    //     interaction: false,
    // });
    // //雪花
    // $("canvas.snow").let_it_snow({
    //     windPower: 1,
    //     speed: 1,
    //     count: 250,
    //     size: 0
    // });
    // //小碎片
    // $("canvas.flake").let_it_snow({
    //     windPower: -2,
    //     speed: 1,
    //     count: 20,
    //     size: 10,
    //     image: "img/img-chip4.png"
    // });

    // $('.nav-btnMenu').click(function(event) {
    //     event.preventDefault();
    //     $('.nav-menuList-mb').toggleClass('nav-menuList-mb-fadeIn');
    //     $('#nav-btnMenu').text($(this).text() == 'close' ? 'menu' : 'close');
    // });

    // $('.btnTop').click(function(event) {
    //     event.preventDefault();
    //     $('html,body').animate({
    //         scrollTop: 0
    //     }, 700);
    // });

    // function showBtnCondition() {
    //     if ($(this).scrollTop() > 1200) {
    //         $('.btnTop').fadeIn();
    //     } else {
    //         $('.btnTop').fadeOut();
    //     }
    // }
    // $(window).scroll(showBtnCondition);

    // $('.productList-item-btnAddCart').click(function(event) {
    //     event.preventDefault();
    //     alert('已將商品加入購物車!');
    // });

    // $('.menu-tab-productCategory li').click(function(event) {
    //     event.preventDefault();
    //     $(this).find('.tab-productCategory-bg').addClass('productCategory-item-active').parent().siblings().find('.tab-productCategory-bg').removeClass('productCategory-item-active');
    // });

    // $('.size-buttonList li').click(function(event) {
    //     event.preventDefault();
    //     $(this).find('button').toggleClass('size-item-active').parent().siblings().find('button').removeClass('size-item-active');
    // });

    // var mm = window.matchMedia("(max-width: 768px)");
    // mm.addListener(resizeWidth);
    // resizeWidth(mm);

    var swiper = new Swiper(".paintingWork-swiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    });

    lightbox.option({
        'disableScrolling': true,
        'fitImagesInViewport': true,
        'resizeDuration': 200,
        'wrapAround': true
    })

    // $(window).scroll(function() {
    //     var scrollPos = $(window).scrollTop();
    //     var windowHeight = $(window).height();
    //     console.log(scrollPos, windowHeight);
    //     // animated
    //     $('.animated-t,.animated-r,.animated-b,.animated-l,.animated-m').each(function() {
    //         var thisPos = $(this).offset().top;
    //         if ((windowHeight + scrollPos) >= thisPos) {
    //             $(this).addClass('fadeIn');
    //         }
    //     });
    //     //bg scroll
    //     $('.img-bg-bubble').css('transform', 'translateY(' + -scrollPos / 2 + 'px)');
    //     $('.img-bg-bubble2').css('transform', 'translateY(' + -scrollPos / 5 + 'px)');
    //     $('.img-bg-orange, .img-bg-orange2, .img-bg-orange3, .img-bg-orange4, .img-bg-orange5, .img-bg-orange6, .img-bg-orange7').css('transform', 'translateY(' + -scrollPos / 16 + 'px)');
    // });
});