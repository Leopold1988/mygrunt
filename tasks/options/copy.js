module.exports = exports = {
  base: { // jquery && other
    expand:true,
    cwd: '<%= src %>/base',
    src: ["**"],
    dest: '<%= dist %>/js'
  },
  sea: { // sea config && main
    expand:true,
    cwd: '<%= src %>/app',
    src: ["config.js", "main.js"],
    dest: '<%= dist %>/js'
  },
  images: { // all images
    expand:true,
    cwd: '<%= src %>/',
    src: ["images/**"],
    dest: '<%= dist %>/'
  }
};