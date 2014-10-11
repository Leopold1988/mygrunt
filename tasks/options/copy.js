module.exports = exports = {
  base: { // jquery && other
    expand:true,
    cwd: '<%= src %>/base',
    src: ["**"],
    dest: '<%= dist %>/js'
  },
  app: { // app
    expand:true,
    cwd: '<%= src %>',
    src: ["app/**"],
    dest: '<%= dist %>/js'
  },
  sea: { // sea config && main
    expand:true,
    cwd: '<%= src %>/app',
    src: ["config.js", "main.js"],
    dest: '<%= dist %>/js'
  },
  model: {
    expand:true,
    cwd: '<%= src %>/model',
    src: ["**/*.js", "**"],
    dest: '<%= dist %>/js/model'
  },
  images: { // all images
    expand:true,
    cwd: '<%= src %>/',
    src: ["images/**"],
    dest: '<%= dist %>/'
  },
  api: { // all images
    expand:true,
    cwd: '<%= src %>/',
    src: ["api.json"],
    dest: '<%= dist %>/'
  }
};