module.exports = exports = {
  options: {
    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'//添加banner
  },
  production: {
    options: {
      report: "gzip",// 输出压缩率，可选的值有 false(不输出信息)，gzip
      mangle: false, // 不混淆变量名
      preserveComments: 'false', // 不删除注释，还可以为 false（删除全部注释），some（保留@preserve @license @cc_on等注释）
      footer:'\n/*! <%= pkg.name %> 最后修改于： <%= grunt.template.today("yyyy-mm-dd") %> */'//添加footer
    },
    files: [{
      expand:true,
      cwd:"<%= dist %>/js", //源文件路径
      src:['*.js', '**/*.js', '!**/jquery*.js'],   //所有js文件
      dest:'<%= dist %>/js'//输出到此目录下
    }]
  }
};