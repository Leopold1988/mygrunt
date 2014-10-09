module.exports = exports = {
  options: {
    curly: true,    // 检测花括号
    eqeqeq: true,   // 检测==和===
    globals: {
      jQuery: true
    }
  },
  default: {
    options: {
      undef: false
    },
    files: {
      src: ['<%= src %>/app/*.js', '<%= src %>/model/*.js', 'gruntfile.js', 'tasks/options/*.js']
    }
  }
};