define(function(require, exports, module) {
  exports.error = function (codenumber) {
    // 1.未登录 2.外网不通
    switch (codenumber) {
      case 1003:
        console.log(codenumber);
        break;
    }
  };
});