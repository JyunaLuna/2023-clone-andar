$(document).ready(function () {
  // 스와이퍼
  const swiper1 = new Swiper(".swiper1", {
    direction: "horizontal",
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });

  const swiper2 = new Swiper(".swiper2", {
    direction: "horizontal",
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },

    pagination:
      {
        el: '.swiper2 .swiper-pagination',
        clickable: true,
      },
  });

  var swiper3 = new Swiper(".swiper3", {
    slidesPerView: 2.2,
    spaceBetween: 10,
    freeMode: true,
    pagination: {
      el: ".swiper3 .swiper-pagination",
      clickable: true,
    },
  });
  // 스크롤 발생시 실행
  $(window).scroll(function () {
    var scroll = $(document).scrollTop();

    //스크롤이 40px 이상이면 fixed 속성 입힘
    if (scroll >= 40) {
      $("#header").addClass("fixed");
    }
    //스크롤이 40px 미만이면 fixed 속성 해제
    else if (scroll < 40) {
      $("#header").removeClass("fixed");
    }
  });

  $(".open_subMenu").click(function () {
    $(this).toggleClass("show");
    $(".menu").toggleClass("none");
    $(".all_menu").toggleClass("show");
    if ($(".top_menu_all.show").hasClass("show")) {
      $(".top_menu_all").removeClass("show").animate(
        {
          "margin-top": "-57px",
          opacity: 0,
        },
        300
      );
    } else {
      $(".top_menu_all").addClass("show").animate(
        {
          "margin-top": "0px",
          opacity: 1,
        },
        300
      );
    }
  });

  $("#openAside").click(function () {
    $("#aside").addClass("show");
  });
  $("#closeAside").click(function () {
    $("#aside").removeClass("show");
  });

  // 햄버거 리스트 index로 클릭 시 on
  $(".gnb_1ul li").click(function () {
    const index = $(".gnb_1ul li").index(this);

    if ($(".gnb_1ul li").hasClass("on")) {
      $(".gnb_1ul li").removeClass("on");
      $(".gnb_1ul li:eq(" + index + ")").addClass("on");
    } else {
      $(".gnb_1ul li:eq(" + index + ")").addClass("on");
    }
  });

  // 첫번째 리스트 index로 클릭 시 on
  $(".tab_best li").click(function () {
    const index2 = $(".tab_best li").index(this);

    $(".tab_best li").removeClass("active");
    $(".tab_best li:eq(" + index2 + ")").addClass("active");
    $(".bestTapList>.tabcnt_best").removeClass("active");
    $(".bestTapList>.tabcnt_best:eq(" + index2 + ")").addClass("active");
  });
});
