var src = 'app'; // 源代码目录
var build = 'build'; // 构建目录
var static = src + '/_static';
var srcAssets = src + '/_assets';
var dataFolder = src + '/_data';
var concatFolder = srcAssets + '/scripts/_concat';
var development = 'build/development';
var production = 'build/production';
var developmentAssets = 'build/assets';
var productionAssets = 'build/production/assets';
var sourcemaps = {
  css: true,
  js: false
}
var stylesheet = {
  // type: 'less',
  // extensions: ["less" ,"css"],
  type: 'sass',
  extensions: ["sass", "scss", "css"],
}

// gulp 任务配置
module.exports = {
  // 本地服务器
  browsersync: {
    development: {
      server: {
        baseDir: [development, build, src]
      },
      port: 9999,
      files: [
        developmentAssets + '/css/*.css',
        developmentAssets + '/js/*.js',
        developmentAssets + '/images/**',
        developmentAssets + '/fonts/*'
      ]
    },
    production: {
      server: {
        baseDir: [production]
      },
      port: 9998
    }
  },
  // 是否开启调试
  debug: {
    state: true,
    options: {
      // prefix: 'Debug:',
      // timestamp: false,
      // 'zero-format': 'No files matched',
      // 'one-format': 'Total: ' + chalk.cyan('1 file'),
      // 'many-format': 'Total: ' + chalk.cyan('%s files')
      // format: '>' + chalk.yellow('%s')
    }
  },
  // 清空构建目录
  delete: {
    src: [developmentAssets, productionAssets]
  },
  // 文件占用空间
  sizereport: {
    src: [
      developmentAssets + '/css/*.css',
      developmentAssets + '/js/*.js',
    ],
    options: {
      gzip: true,
      '*': {
        'maxSize': 100000
      },
    }
  },
  // Html5 Cache Manifest离线缓存,不是PWA manifest.json，注意区别
  // Cache Manifest部署 <html manifest="demo.appcache">
  // PWA manifest.json介绍 https://lavas.baidu.com/mip/doc/engage-retain-users/add-to-home-screen/introduction
  // PWA部署 <link rel="manifest" href="path-to-manifest/manifest.json">
  manifest: {
    src: [
      build + '/**/*',
      '!' + build + '/**/*.{zip,gz}',
      '!' + build + '/**/README.md',
    ],
    base: './',
    options: {
      timestamp: true,
      hash: true,
      preferOnline: true,
      network: ['*'],
      filename: 'app.manifest',
      exclude: 'app.manifest',
      fallback: '/html5/ /404.html', // 如果无法建立因特网连接，则用 "404.html" 替代 /html5/ 目录中的所有文件
      revision: 'v1.0.0'
    }
  },
  // 通用资源目录，例如：favicion
  static: {
    src: [
      static + '/**/*',
      '!' + static + '/**/README.md',
    ],
    dest: build
  },
  // 字体
  fonts: {
    development: {
      src: srcAssets + '/fonts/**/*',
      dest: developmentAssets + '/fonts'
    },
    production: {
      src: developmentAssets + '/fonts/**/*',
      dest: productionAssets + '/fonts'
    }
  },
  // styles样式表
  styles: {
    type: stylesheet.type,
    src: [
      srcAssets + '/styles/**/*.{' + stylesheet.extensions + '}',
      '!' + srcAssets + '/styles/**/_*.{' + stylesheet.extensions + '}',
    ],
    dest: developmentAssets + '/css',
    sourcemap: sourcemaps.css, //是否生成sourcemap
    less: {
      extensions: ["less", "css"],
      compile: {
        compress: true
      }
    },
    sass: {
      extensions: ["sass", "scss", "css"],
      compile: {
        outputStyle: 'compressed'
      }
    },
    postcss: {
      extensions: ["css"],
      compile: {
        indentedSyntax: true,
        includePaths: [
          './node_modules/normalize.css'
        ]
      }
    },
    options: {
      precss: {},
      clean: {
        debug: true,
        level: 0, // The level option can be either 0, 1 (default), or 2, e.g.
        compatibility: 'ie8', // Internet Explorer 8+ compatibility mode
        keepSpecialComments: 0,
        removeDuplicateRules: true,
        format: 'keep-breaks' // formats output the default way but adds line breaks for improved readability
      },
      minify: {
        debug: true,
        level: 2, // The level option can be either 0, 1 (default), or 2, e.g.
        compatibility: 'ie8', // Internet Explorer 8+ compatibility mode
        removeDuplicateRules: true,
        // format: 'keep-breaks' // formats output the default way but adds line breaks for improved readability
      },
      autoprefixer: {
        browsers: [
          'last 2 versions',
          'safari 5',
          'ie 8',
          'ie 9',
          'opera 12.1',
          'ios 6',
          'android 4'
        ],
        cascade: true
      },
      mqpacker: {}
    }
  },
  // styles样式表校验
  csslint: {
    src: [
      developmentAssets + '/css/*css',
      '!' + developmentAssets + '/css/*.min.css',
    ],
    options: {
      stylelint: {
        config: {
          "rules": {
            "block-no-empty": null,
            "color-no-invalid-hex": true,
            "comment-empty-line-before": ["always", {
              "ignore": ["stylelint-commands", "after-comment"]
            }],
            "declaration-colon-space-after": "always",
            "indentation": ["tab", {
              "except": ["value"]
            }],
            "max-empty-lines": 2,
            "rule-empty-line-before": ["always", {
              "except": ["first-nested"],
              "ignore": ["after-comment"]
            }],
            // "unit-whitelist": ["px", "em", "rem", "%", "s"]
          }
        },
        reporters: [
          { formatter: 'verbose', console: true }
        ],
        fix: true,
        failAfterError: false
      }
    }
  },
  // scripts脚本
  js: {
    src: [
      srcAssets + '/scripts/**/*.js',
      '!' + srcAssets + '/scripts/_*/**',
      '!' + srcAssets + '/scripts/**/_*.js',
    ],
    dest: developmentAssets + '/js/',
    sourcemap: sourcemaps.js, //是否生成sourcemap
    concat: {
      merge: true, // 是否合并子目录文件
      folder: concatFolder,
      excludeFolders: [
        'debug-modules',
        'bootstrap'
      ],
      dest: developmentAssets + '/js/',
    },
    options: {
      uglify: {

      }
    }
  },
  // scripts脚本校验
  jshint: {
    src: [
      srcAssets + '/scripts/*.js',
      '!' + srcAssets + '/scripts/*.min.js',
    ]
  },
  images: {
    src: srcAssets + '/images/**/*',
    dest: developmentAssets + '/images'
  },
  webp: {
    src: productionAssets + '/images/**/*.{jpg,jpeg,png}',
    dest: productionAssets + '/images/',
    options: {}
  },
  base64: {
    src: developmentAssets + '/css/*.css',
    dest: developmentAssets + '/css',
    options: {
      baseDir: build,
      extensions: ['png'],
      maxImageSize: 20 * 1024, // bytes
      debug: false
    }
  },
  // css sprite图片精灵
  sprites: {
    src: srcAssets + '/images/sprites',
    // src: srcAssets + '/images/sprites/icon/*.png',
    dest: {
      css: srcAssets + '/styles/application/sprites/',
      image: developmentAssets + '/images'
    },
    options: {
      // cssName: '_sprites.scss',
      cssFormat: 'css',
      padding: 20, //图片间距
      algorithm: 'binary-tree', //图标排列方式，top-down、left-right、diagonal、alt-diagonal、binary-tree
      cssOpts: {
        cssSelector: function(item) {
          // If this is a hover sprite, name it as a hover one (e.g. 'home-hover' -> 'home:hover')
          if (item.name.indexOf('-hover') !== -1) {
            return '.' + item.name.replace('-hover', ':hover');
            // Otherwise, use the name as the selector (e.g. 'home' -> 'home')
          } else {
            return '.' + item.name;
          }
        }
      },
      // imgName: 'icon-sprite.png',
      // imgPath: '/assets/images/sprites/icon-sprite.png'
    }
  },
  data: {
    src: dataFolder + '/**/_*.json',
    dataFile: dataFolder + '/data.json',
    dest: dataFolder
  },
  html: {
    src: src,
    dest: build,
    development: {
      src: src,
      dest: development
    },
    production: {
      src: src,
      dest: production
    },
    compile: {
      collapseWhitespace: true
    },
    extensions: ["html", "json"],
    excludeFolders: ["_layouts", "_includes", "_macros", "_bower_components", "_data", "_static"]
  },
  // 打包
  gzip: {
    // src: production + '/**/*.{html,xml,json,css,js}',
    src: [
      production + '/**/*',
      '!' + productionAssets + '/*.json',
      '!' + production + '/**/*.{zip,gz}',
      '!' + production + '/**/README.md',
    ],
    dest: production,
    filename: 'production',
    options: {
      extension: 'zip'
    }
  },
  // 压缩优化
  optimize: {
    css: {
      src: developmentAssets + '/css/*.css',
      dest: productionAssets + '/css/',
      options: {
        keepSpecialComments: 0
      }
    },
    js: {
      src: developmentAssets + '/js/*.js',
      dest: productionAssets + '/js/',
      options: {}
    },
    images: {
      src: developmentAssets + '/images/**/*.{jpg,jpeg,png,gif}',
      dest: productionAssets + '/images/',
      options: {
        optimizationLevel: 3,
        progessive: true,
        interlaced: true
      }
    },
    html: {
      src: production + '/**/*.html',
      dest: production,
      options: {
        collapseWhitespace: true
      }
    }
  },
  // 加版本号
  rev: {
    src: {
      assets: [
        productionAssets + '/css/*.css',
        productionAssets + '/js/*.js',
        productionAssets + '/images/**/*'
      ],
      base: production
    },
    dest: {
      assets: production,
      manifest: {
        name: 'rev.manifest.json',
        path: productionAssets
      }
    }
  },
  collect: {
    src: [
      productionAssets + '/manifest.json',
      production + '/**/*.{html,xml,txt,json,css,js}',
      '!' + production + '/feed.xml'
    ],
    dest: production
  },
  // 监听文件
  watch: {
    // jekyll: [
    //   '_config.yml',
    //   '_config.build.yml',
    //   'stopwords.txt',
    //   src + '/_data/**/*.{json,yml,csv}',
    //   src + '/_includes/**/*.{html,xml}',
    //   src + '/_layouts/*.html',
    //   src + '/_locales/*.yml',
    //   src + '/_plugins/*.rb',
    //   src + '/_posts/*.{markdown,md}',
    //   src + '/**/*.{html,markdown,md,yml,json,txt,xml}',
    //   src + '/*'
    // ],
    html: [
      src + '/_data/**/*.{json,yml,csv}',
      src + '/_includes/**/*.{html,xml}',
      src + '/_layouts/*.html',
      src + '/**/*.{html,markdown,md,yml,json,txt,xml}',
      src + '/*'
    ],
    static: static + '/**/*',
    fonts: srcAssets + '/fonts/**/*',
    styles: srcAssets + '/styles/**/*.{css,scss,less}',
    scripts: srcAssets + '/scripts/**/*.js',
    images: srcAssets + '/images/**/*',
    sprites: srcAssets + '/images/**/*.png',
    // svg:     'vectors/*.svg'
  },
  rsync: {
    src: production + '/**',
    options: {
      destination: '~/path/to/my/website/root/',
      root: production,
      hostname: 'mydomain.com',
      username: 'user',
      incremental: true,
      progress: true,
      relative: true,
      emptyDirectories: true,
      recursive: true,
      clean: true,
      exclude: ['.DS_Store'],
      include: []
    }
  }
};
