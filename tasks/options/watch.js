module.exports = exports = {
  options: {
    livereload : true
  },
  development: {
    files: [
      '<%= src %>/app/*.js',
      '<%= src %>/model/**/*.js',
      '<%= src %>/model/*.js',
      '<%= src %>/**/*.less',
      '<%= src %>/jade/**',
      'tasks/options/*.js'
    ],
    tasks: [
      'jshint',
      'clean',
      'copy:base',
      'copy:sea',
      'copy:sealab',
      'copy:model',
      'copy:images',
      'copy:app',
      'copy:api',
      //'concat',
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
      'copy:sealab',
      'copy:model',
      'copy:images',
      'copy:app',
      'copy:api',
      //'concat',
      'uglify:production',
      'less:production',
      'jade',
      'imagemin'
    ]
  }
};