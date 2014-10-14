define(function(require) {

  // 通过 return 直接提供接口
  return {
    // cookie存储
    // name:为要存的键
    // value:为要存的值
    // iDay:过期时间
    // domain(可选):域
    set : function (name, value, expiredays, domain) {
      var oDate = new Date();
      var _domain = '';
      if (domain) _domain = 'domain=' + domain;
      oDate.setMinutes(oDate.getMinutes() + expiredays);
      oDate = oDate.toGMTString();
      document.cookie = name + '=' + escape(value) + ';path=/;' + _domain + ';expires=' + oDate;
    },
    get : function (name) {
      var arr = document.cookie.split('; ');
      var i = 0;
      for (i = 0; i < arr.length; i++) {
        var arr2 = arr[i].split('=');
        if (arr2[0] == name) {
          return unescape(arr2[1]);
        }
      }
      return'';
    },
    remove : function (name) {
      this.setCookie(name, 1, -1000);
    }
  };

});