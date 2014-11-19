define(function(require) {

  // 通过 return 直接提供接口

  return {
    doSomething: function() {
      require.async("model/cookie_model/cookie", function (cookie) {
        cookie.set("name", "lipeng", 2);
      });
    }
  };

});