seajs.config({

  // 别名配置
  alias: {
    'json': '../js/tool/json2.js',
    'png': '../js/tool/DD_belatedPNG_0.0.8a.js',
    'modernizr': '../js/modernizr/modernizr.js',
    'hipopup': '../js/jquery/hipopup.js',
    'firebug': 'https://getfirebug.com/firebug-lite.js'
  },

  base: "../model",

  // 路径配置
  paths: {
    'js': '../js',
    'model': '../../model'
  },

  // 变量配置
  // vars: {
  //   'varisIE6': document.all && !window.XMLHttpRequest
  // },

  // 映射配置
  // map: [
  //   ['http://example.com/js/app/', 'http://localhost/js/app/']
  // ],

  // 预加载项
  preload: [
    document.all && !window.XMLHttpRequest ? 'firebug' : '',
    document.all && !window.XMLHttpRequest ? 'png' : '',
    'modernizr',
    'hipopup',
    this.JSON ? '' : 'json'
  ],

  // // 调试模式
  // debug: true,

  // // Sea.js 的基础路径
  // base: 'http://example.com/path/to/base/',

  // 文件编码
  charset: 'utf-8'
});

seajs.use("js/main");