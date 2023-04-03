
// A $( document ).ready() block.
jQuery = $;

$(document).ready(function() {
  $(".slide-promotion").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed:3000,
      vertical: true,
      arrows: false,
     
  });

  $(".home-product-featured").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:3000,
    dots: true,
    arrows: false,
  });

  $(".home-product-item").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow:"<button type='button' class='slick-prev pull-left slick-arrow'><i class='fa-solid fa-angle-left'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right slick-arrow'><i class='fa-solid fa-angle-right'></i></button>",
    responsive: [
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $(".slide-product-category").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow:"<button type='button' class='slick-prev pull-left slick-arrow'><i class='fa-solid fa-angle-left'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right slick-arrow'><i class='fa-solid fa-angle-right'></i></button>",
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });

  $(".related-news .related-news-slide").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow:"<button type='button' class='slick-prev pull-left slick-arrow'><i class='fa-solid fa-angle-left'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right slick-arrow'><i class='fa-solid fa-angle-right'></i></button>",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


  // chi tiet san pham
  $('.detail-product-slide-left').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.detail-product-slide-right',
  });
  
  $('.detail-product-slide-right').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.detail-product-slide-left',
    dots: false,
    vertical: true,
    centerMode: true,
    focusOnSelect: true
  });

  $(".slide-product-like").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:3000,
    arrows: false,

   
  });

});

$(document).ready(function () {
    $('.box-nav-angle-down-1').click(function () {
      if($('.menu-mobile-lv-2').css('opacity')=='0'){
        $(".menu-mobile-lv-2").addClass("mobile-lv2-opacity")
      }
      else{
        $(".menu-mobile-lv-2").removeClass("mobile-lv2-opacity")
      }
      console.log($('.box-nav-angle-down-1').css('opacity'));
      
    });
  });

// $(document).ready(function () {
//   $('.box-nav-angle-down-1').click(function () {
//     if($('.menu-mobile-lv-2').css('opacity')=='0'){
//       $(".menu-mobile-lv-2").addClass("mobile-lv2-opacity")
//     }
//     else{
//       $(".menu-mobile-lv-2").removeClass("mobile-lv2-opacity")
//     }
//     console.log($('.box-nav-angle-down-1').css('opacity'));
    
//   });
// });

// $(document).ready(function () {
//   $('.box-nav-angle-down').click(function () {
//     if($('.menu-mobile-lv-1').css('opacity')=='0'){
//       $(".menu-mobile-lv-1").addClass("mobile-lv1-opacity")
     
//       console.log('aaaaa');
//     }
//     else{
//       $(".menu-mobile-lv-1").removeClass("mobile-lv1-opacity")
//     }
//     console.log($('.box-nav-angle-down').css('opacity'));
//   });
// });







