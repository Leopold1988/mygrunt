define(function(require, exports, module) {
  exports.doit = function (data, success, fail, config) {
    var config = config || {};

    config.url = config.url ? config.url : null;
    config.timeout = config.timeout ? config.timeout : null;

    var xmlRequest = $.ajax({
      url: "../api.json" || config.url,
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