// var jQuery = require("jquery");
//bootstrap
require(['jquery', 'bootstrap'], function($) {
  console.log("Bootstrap Loaded :)");
  $(function() {
    // bootstrap tooltip
    $('[data-toggle="tooltip"]').tooltip();
  });
});

// 导航菜单
require(["jquery", "smartmenus"], function($) {
  console.log("SmartMenus Loaded :)");
  // jquery.smartemnus.min.js has been loaded so init the menu
  $(function() {
    $('.sm').smartmenus({
      mainMenuSubOffsetX: -1,
      subMenusSubOffsetX: 0,
      subMenusSubOffsetY: -1
    });
  });
});

// 页面滚动，导航菜单固定在视窗顶部
require(['jquery', 'sticky'], function($) {
  console.log("Sticky Loaded :)");
  $(function() {
    var stickyHeader = new StickySidebar('.header', {
      topSpacing: 0,
      bottomSpacing: 0,
      containerSelector: 'body',
      innerWrapperSelector: '.header-container'
    });
  });
});

// 导航菜单鼠标移入移出
require(['jquery'], function($) {
  $(function() {
    $(".header").mouseover(function() {
      var s = event.fromElement || event.relatedTarget;
      if (!this.contains(s)) { $(this).addClass('nav-hovered'); }
    });
    $(".header").mouseout(function() {
      var s = event.toElement || event.relatedTarget;
      if (!this.contains(s)) { $(this).removeClass('nav-hovered'); }
    });
  });
});

//轮播图
require(['jquery', 'royalslider'], function($) {
  console.log("royalslider Loaded :)");
  $(function() {
    var slider = $('.full-width-slider').royalSlider({
      arrowsNav: false,
      arrowsNavAutoHide: false,
      arrowsNavHideOnTouch: true,
      // usePreloader: true,
      loop: true,
      keyboardNavEnabled: true,
      controlsInside: false,
      imageScaleMode: 'fill',
      imageAlignCenter: true,
      autoScaleSlider: true,
      autoScaleSliderWidth: 1920,
      autoScaleSliderHeight: 1040,
      controlNavigation: 'bullets',
      thumbsFitInViewport: false,
      navigateByClick: false,
      startSlideId: 0,
      slidesSpacing: 0,
      transitionSpeed: 1000,
      autoPlay: {
        // autoplay options go gere
        enabled: true,
        pauseOnHover: true
      },
      transitionType: 'move',
      globalCaption: false,
      deeplinking: {
        enabled: true,
        change: false
      },
      imgWidth: 1920,
      imgHeight: 1040
    }).data("royalSlider");
  });
});

// require(['jquery', 'superslides'], function($) {
//   $(function() {
//     $('#slides').superslides();
//   });
// });

// fancybox
require(['jquery', 'fancybox']);

// 图片轮播
// require(['jquery', 'owl.carousel'], function($) {
//   console.log("owl.carousel Loaded :)");
//   $(function() {
//     var owl = $(".owl-carousel");
//     owl.owlCarousel({
//       lazyLoad: true,
//       stopOnHover: true
//     });
//   });
// });

// 背景图片切换
require(['jquery', 'bose.slider'], function($) {
  console.log("bose.slider Loaded :)");
  $(function() {
    $(".bose").bose({
      images: ["assets/images/module/module-traction-rope.jpg", "assets/images/module/module-water-dispenser.jpg"],
      onComplete: function() {
        console.log("Trigger onComplete!");
      },
      onSlideStart: function(index) {
        console.log(index + ' destroying');
      },
      onSlideEnd: function(index) {
        console.log(index + ' showed');
      },
      onPause: function(index) {
        console.log('Paused');
      },
      pagination: { show: true, container: '.bose-pagination', text: true },
      // thumbs: { show: true, container: '.bose-thumbs', dimension: { width: 150, height: 70 }, text: true },
      responsive: true,
      autofit: false
    });

    $('.play').click(function() {
      $(".bose").bose('play');
    });

    $('.pause').click(function() {
      $(".bose").bose('pause');
    });

    $('.previous').click(function() {
      $(".bose").bose('previous');
    });

    $('.next').click(function() {
      $(".bose").bose('next');
    });
  });
});

// 图片比对
// require(['BeerSlider'], function(BeerSlider) {
//   console.log("BeerSlider Loaded :)");
//   $(function() {
//     new BeerSlider(document.getElementById('beer-slider'));
//   });
// });

// 返回顶部
require(['jquery', 'toTop'], function($) {
  console.log("toTop Loaded :)");
  $(function() {
    $(".js-toTop").toTop({
      autohide: true,
      position: false
    });
  });
});
