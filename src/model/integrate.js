define(function(require, exports, module) {
  return {
    console : function(){
      var a = function(){return;};
      if (!window.console) {
        window.console = {};
      }
      // union of Chrome, FF, IE, and Safari console methods
      var m = [
        "log", "info", "warn", "error", "debug", "trace", "dir", "group",
        "groupCollapsed", "groupEnd", "time", "timeEnd", "profile", "profileEnd",
        "dirxml", "assert", "count", "markTimeline", "timeStamp", "clear"
      ];
      // define undefined methods as noops to prevent errors
      for (var i = 0; i < m.length; i++) {
        if (!window.console[m[i]]) {
          window.console[m[i]] = a;
        }
      }
    },

    showlayer : function (hoverobj, showlayer) {
      hoverobj.on({
        mouseenter : function(){
          showlayer.addClass('active');
        },
        mouseleave : function(){
          console.log(1);
          showlayer.removeClass('active');
        }
      });
    }
  };
});