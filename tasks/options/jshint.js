module.exports = exports = {
  options: {
    curly: true,
    eqeqeq: true,
    eqnull: true,
    browser: true,
    globals: {
      jQuery: true
    }
  },
  with_overrides: {
    options: {
      curly: false,
      undef: true,
    },
    files: {
      src: ['src/js/**']
    }
  }
};