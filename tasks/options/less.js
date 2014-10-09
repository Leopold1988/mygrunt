module.exports = exports = {
  development: {
    options: {
      report: "gzip"
    },
    files: {
      "<%= dist %>/css/style.css": "<%= src %>/less/style.less"
    }
  },
  production: {
    options: {
      cleancss: true,
      compress: true,
      report: "gzip"
    },
    files: {
      "<%= dist %>/css/style.css": "<%= src %>/less/style.less"
    }
  }
};