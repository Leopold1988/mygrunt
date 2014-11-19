define(function(require, exports, module) {
  /*
  data:为要传输的data数据，如"c=getxxx"||{c:"getxxx"}
  success:为成功的回调函数，有回调参数
  fail:为失败的回调函数，有回调参数
  config:为个性化设置，如设置特别的timeout和type，{timeout:3000, type:"GET"}
  */
  exports.doit = function (data, success, fail, config) {
    var config = config || {};

    config.url = config.url ? config.url : null;
    config.type = config.type ? config.type : null;
    config.timeout = config.timeout ? config.timeout : null;

    var xmlRequest = $.ajax({
      url: "../api.json" || config.url,
      type: "POST" || config.type,
      async: config.async || true,
      cache: false,
      dataType: "json",
      timeout: 5000 || config.timeout,
      data: data
    });

    xmlRequest.done(function (json) {
      if (json.errorcode) {
        // require.async("./errorcode.js", function (result) {
        //   result.error(json.errorcode);
        // });
      } else {
        success && success(json);
      }
    });

    xmlRequest.fail(function(jqXHR, textStatus, errorThrown){
      fail && fail(textStatus);
    });
  };
});