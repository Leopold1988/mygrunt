module.exports = exports = {
  default: {
    options: {
      pretty : true
    },
    files: [{
      expand:true,
      cwd:"<%= src %>/jade",
      src:['*.jade', '**/*.jade', '!model/*.jade', '!variables/*.jade'],
      dest:'<%= dist %>/html',
      ext: '.html'
    }]
  },
  model: {
    options: {
      pretty : true
    },
    files: [{
      expand:true,
      cwd:"<%= src %>/model",
      src:['**/*.jade'],
      dest:'<%= dist %>/model',
      ext: '.html'
    }]
  }
};