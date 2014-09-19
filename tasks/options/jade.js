module.exports = exports = {
  release: {
    options: {
      pretty : true
    },
    files: [{
      expand:true,
      cwd:"src/jade",
      src:['*.jade', '**/*.jade', '!model/*.jade', '!variables/*.jade'],
      dest:'dist/html',
      ext: '.html'
    }]
  }
};