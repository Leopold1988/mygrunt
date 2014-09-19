module.exports = exports = {
  development: {
    files: {
      "dist/css/style.css": "src/less/style.less"
    }
  },
  production: {
    options: {
      cleancss: true,
      compress : true
    },
    files: {
      "dist/css/style.css": "src/less/style.less"
    }
  }
};