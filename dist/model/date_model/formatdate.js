define(function(require, exports, module) {
  // 日期转时间戳
  exports.datetime_to_unix = function (datetime) {
    var tmp_datetime = datetime.replace(/:/g,'-');
    tmp_datetime = tmp_datetime.replace(/ /g,'-');
    var arr = tmp_datetime.split("-");
    var now = new Date(Date.UTC(arr[0],arr[1]-1,arr[2],arr[3]-8,arr[4],arr[5]));
    return parseInt(now.getTime()/1000);
  };

  // 时间戳转日期
  exports.unix_to_datetime = function (unix) {
    var now = new Date(parseInt(unix) * 1000);
    return now.toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");
  };
});