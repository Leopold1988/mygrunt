define(function(require, exports, module) {
  var format = require("model/date_model/formatdate");
  var unix = format.datetime_to_unix('2012-11-16 10:36:50');
  var date = format.unix_to_datetime(1353033300);

  $("#format .unix").html(unix);
  $("#format .date").html(date);
});