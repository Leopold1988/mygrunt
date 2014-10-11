define(function(require, exports, module) {
  exports.do = function (data, success, fail, config) {
    var config = config || {};
    var xmlRequest = $.ajax({
      url: "/dist/api.json" || config.url,
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