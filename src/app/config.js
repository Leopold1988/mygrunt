seajs.config({

  // 别名配置
  alias: {
    'json': '../js/base/json2/json2.js',
    'jquery': '../js/base/jquery/jquery-1.8.2-cmd.js'
  },

  // 路径配置
  paths: {
    'js': '../js'
  },

  // 变量配置
  // vars: {
  //   'locale': 'zh-cn'
  // },

  // 映射配置
  // map: [
  //   ['http://example.com/js/app/', 'http://localhost/js/app/']
  // ],

  // 预加载项
  preload: [
    'jquery',
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