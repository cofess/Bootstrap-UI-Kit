//bootstrap
require(['jquery', 'bootstrap'], function($) {
  console.log("Bootstrap Loaded :)");
  $(function() {
    /** Initialize tooltips */
    $('[data-toggle="tooltip"]').tooltip();

    /** Initialize popovers */
    $('[data-toggle="popover"]').popover({
      html: true
    });

    /* toast */
    $(".toast").toast({
      autohide: false
    }).toast("show");
  });
});

// card actions
require(['jquery'], function($) {
  $(function() {
    /** Constant div card */
    var DIV_CARD = 'div.card';

    /** Function for remove card */
    $('[data-toggle="card-remove"]').on('click', function(e) {
      var $card = $(this).closest(DIV_CARD);

      $card.remove();

      e.preventDefault();
      return false;
    });

    /** Function for collapse card */
    $('[data-toggle="card-collapse"]').on('click', function(e) {
      var $card = $(this).closest(DIV_CARD);

      $card.toggleClass('card-collapsed');

      e.preventDefault();
      return false;
    });

    /** Function for fullscreen card */
    $('[data-toggle="card-fullscreen"]').on('click', function(e) {
      var $card = $(this).closest(DIV_CARD);

      $card.toggleClass('card-fullscreen').removeClass('card-collapsed');

      e.preventDefault();
      return false;
    });
  });
});

// 导航菜单
if ($('.sm').length) {
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
}

// 页面滚动，导航菜单固定在视窗顶部
// require(['jquery', 'sticky'], function($) {
//   console.log("Sticky Loaded :)");
//   $(function() {
//     var stickyHeader = new StickySidebar('.header', {
//       topSpacing: 0,
//       bottomSpacing: 0,
//       containerSelector: 'body',
//       innerWrapperSelector: '.header-container'
//     });
//   });
// });

// 图片延迟加载
require(['blazy'], function(Blazy) {
  console.log("blazy Loaded :)");
  $(function() {
    var bLazy = new Blazy({
      selector: ".img-background,.bs-lazy,.bs-lazy-iframe-wrapper iframe,img[data-src],iframe[data-src]",
      success: function(element) {
        element.className = element.className + " b-load-ready", setTimeout(function() {
          // We want to remove the loader gif now.
          // First we find the parent container
          // then we remove the "loading" class which holds the loader image
          var parent = element.parentNode;
          parent.className = parent.className.replace(/\bloading\b/, '');
          element.className = element.className.replace("b-load-ready", "");
        }, 200);
      }
    });
  });
});

// match height
require(['jquery', 'matchHeight'], function($) {
  console.log("matchHeight Loaded :)");
  $(function() {
    $('[data-toggle="match-height"]').matchHeight();
  });
});

// 瀑布流
require(['macy'], function(Macy) {
  console.log("macy Loaded :)");
  $(function() {
    $('.waterfall-grid').each(function() {
      var container = $(this).context.className;
      var margin = ($(this).data('margin')) ? $(this).data('margin') : 15;
      var breakAt = ($(this).data('responsive')) ? $(this).data('responsive') : [{ "1200": 4, "940": 3, "520": 2, "400": 2 }];
      breakAt = breakAt[0];
      console.log($(this).data('responsive')[0]);
      console.log('.' + container, margin, breakAt);

      var masonry = new Macy({
        container: '.' + container,
        trueOrder: false,
        waitForImages: false,
        useOwnImageLoader: false,
        debug: false,
        mobileFirst: true,
        columns: 1,
        margin: margin,
        breakAt: breakAt
      });
    });
  });
});

// 页面加载动画
require(['wow'], function() {
  console.log("wow Loaded :)");
  $(function() {
    var wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 100,
      mobile: false,
      live: true,
      callback: function(box) {
        console.log("WOW: animating <" + box.tagName.toLowerCase() + ">");
      }
    });
    wow.init();
  });
});

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

// slimscroll
if ($(".slimContent").length) {
  require(['jquery', 'slimscroll'], function($) {
    console.log("slimscroll Loaded :)");
    if (typeof $.fn.slimScroll != 'undefined') {
      $(".slimContent").each(function() {
        var $slimScroll = $(this);
        $slimScroll.slimScroll({
          height: $slimScroll.data("height") ? $slimScroll.data("height") : "auto",
          color: "#000",
          size: "3px",
          alwaysVisible: $slimScroll.data("always-visible") ? $slimScroll.data("always-visible") : false,
          railVisible: true,
          touchScrollStep: $slimScroll.data("touch-scroll-step") ? $slimScroll.data("touch-scroll-step") : 200,
          railDraggable: true,
          allowPageScroll: $slimScroll.data("allow-page-scroll") ? $slimScroll.data("allow-page-scroll") : false
        });
      });
    }
  });
}

require(['jquery', 'plugin'], function($) {
  console.log("plugin Loaded :)");
});

//轮播图
if ($(".full-width-slider").length) {
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
}

// fancybox
require(['jquery', 'fancybox'], function($) {
  console.log("fancybox Loaded :)");
});

/**
 * 图片轮播
 * http://codetheory.london/multiple-owlcarousel-init-based-on-data-attributes/
 */
if ($(".owl-carousel").length) {
  require(["jquery", 'owl.carousel'], function($) {
    console.log("owl.carousel Loaded :)");
    $(function() {
      $('.owl-carousel').each(function() {
        var $carousel = $(this);
        $carousel.owlCarousel({
          dots: $carousel.data("dots"),
          items: $carousel.data("items"),
          slideBy: $carousel.data("slideby"),
          center: $carousel.data("center"),
          loop: $carousel.data("loop"),
          margin: $carousel.data("margin"),
          nav: $carousel.data("nav"),
          autoWidth: $carousel.data("autoWidth"),
          autoplay: $carousel.data("autoplay"),
          autoplayTimeout: $carousel.data("autoplay-timeout"),
          lazyLoad: $carousel.data("lazyload"),
          responsive: $carousel.data("responsive"),
          navText: ['<span class="icon icon-arrow-left-s-line"><span>', '<span class="icon icon-arrow-right-s-line"></span>']
        });
      });
    });
  });
}
