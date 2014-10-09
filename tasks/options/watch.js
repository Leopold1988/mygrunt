module.exports = exports = {
  options: {
    livereload : true
  },
  development: {
    files: [
      '<%= src %>/**/*.js',
      '<%= src %>/**/*.less',
      '<%= src %>/jade/**',
      'tasks/options/*.js'
    ],
    tasks: [
      'jshint',
      'clean',
      'copy:base',
      'copy:sea',
      'copy:images',
      'concat',
      'less:development',
      'jade',
      'imagemin'
    ]
  },
  production: {
    files: [
      'src/**/*.js',
      'src/**/*.less',
      'src/jade/**',
      'tasks/options/*.js'
    ],
    tasks: [
      'jshint',
      'clean',
      'copy:base',
      'copy:sea',
      'copy:images',
      'concat',
      'uglify:production',
      'less:production',
      'jade',
      'imagemin'
    ]
  }
};