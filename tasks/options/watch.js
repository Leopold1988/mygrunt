module.exports = exports = {
  src: {
    files: [
      'src/js/*.js',
      'src/less/*.less',
      'src/jade/**',
      'tasks/options/*.js'
    ],
    tasks: [
      'jshint:with_overrides',
      'clean:build',
      'copy',
      'concat',
      'uglify:buildall',
      'less:production',
      'jade:release',
      'imagemin:dynamic'
    ]
  }
};