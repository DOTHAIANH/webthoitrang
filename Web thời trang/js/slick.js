
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
    nextArrow:"<button type='button' class='slick-next pull-right slick-arrow'><i class='fa-solid fa-angle-right'></i></button>"
    
  });

  $(".related-news .related-news-slide").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow:"<button type='button' class='slick-prev pull-left slick-arrow'><i class='fa-solid fa-angle-left'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right slick-arrow'><i class='fa-solid fa-angle-right'></i></button>"
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





