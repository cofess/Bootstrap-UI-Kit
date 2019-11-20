//requirejs的一些基本配置
require.config({
  //引入所有js的基础路径，默认是在引入requirejs的html页面所在的目录
  baseUrl: '/',
  //引入文件的代名称和路径
  paths: {
    // 'rev-manifest': './dist/js/rev-manifest',
    // 'jquery': ['//cdn.jsdelivr.net/npm/jquery@1.12.4/dist/jquery.min', 'assets/js/lib/jquery.min'],
    'jquery': 'assets/js/lib/jquery.min',
    'util': 'assets/js/lib/util',
    'easing': 'assets/js/lib/jquery.easing.1.3',
    'animate-enhanced': 'assets/js/lib/jquery.animate-enhanced.min',
    'hammer': 'assets/js/lib/hammer.min',
    'bootstrap': ['assets/js/lib/bootstrap.bundle.min', 'https://cdn.bootcss.com/twitter-bootstrap/4.3.1/js/bootstrap.bundle.min.js'],
    // core
    'blazy': 'assets/js/core/blazy.min',
    'matchHeight': 'assets/js/core/jquery.matchHeight',
    'slimscroll': 'assets/js/core/jquery.slimscroll.min',
    'toTop': 'assets/js/core/jquery.toTop',
    'macy': 'assets/js/core/macy',
    'validator': 'assets/js/core/validator.min',
    'wow': 'assets/js/core/wow.min',
    // vendors
    'smartmenus': 'assets/js/vendors/jquery.smartmenus.min',
    'sticky': 'assets/js/vendors/sticky-sidebar.min',
    'royalslider': 'assets/js/vendors/jquery.royalslider.min',
    'superslides': 'assets/js/vendors/jquery.superslides.min',
    'fancybox': 'assets/js/vendors/jquery.fancybox.min',
    'owl.carousel': 'assets/js/vendors/owl.carousel.min',
    'selectize': 'assets/js/vendors/selectize.min',
    'spin': 'assets/js/vendors/spin.min',
    'ladda': 'assets/js/vendors/ladda.min',
    'darkmode': '//cdn.jsdelivr.net/npm/darkmode-js@1.5.3/lib/darkmode-js.min',
    // application
    'plugin': 'assets/js/plugin.min',
    'core': 'assets/js/application',
  },
  map: {
    '*': {
      'css': '//cdn.jsdelivr.net/npm/require-css@0.1.10/css.min.js',
    }
  },
  //第三方模块---未使用define来申明模块
  shim: {
    'jquery': {
      exports: '$'
    },
    'bootstrap': { deps: ['jquery'], exports: '$' },
    'royalslider': ['jquery'],
    'sticky': ['jquery'],
    'superslides': ['jquery'],
    'fancybox': ['jquery'],
    'owl.carousel': ['jquery'],
    'smartmenus': ['jquery'],
    'plugin': ['jquery'],
    'core': ['bootstrap', 'jquery'],
  },
  waitSeconds: 0,
  // 加上时间戳
  // 向服务端传递额外的参数，通常用来起到禁用缓存的效果
  // urlArgs: "time=" + new Date().getTime()
});

// require错误处理,否则默认会去访问官网,国外很慢
require.onError = function(err) {
  console.error('require error:', err);
  if (err.requireType === 'timeout') {
    console.log('modules: ' + err.requireModules);
  }
  throw err;
};

require(['jquery'], function($) {
  console.log("jQuery Loaded :)");
  require(['core']);
});
