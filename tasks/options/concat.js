module.exports = exports = {
  options: {
    separator: ';',
    banner: '/*! <%= pkg.name %> <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'//添加banner
  },
  development: {
    src: ['<%= src %>/app/*.js', '!<%= src %>/app/main.js', '!<%= src %>/app/config.js'],
    dest: '<%= dist %>/js/<%= js %>.js'
  }
};