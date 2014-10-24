define(function(require, exports, module) {
  /*
  注意：javascript全局应存在
  window.domy = {};
  domy.toggle = {
    a : true // a若为true则定时器正常运行,若为false定时器立即停止。
  };

  参数：
  {
    num : 20, // 倒计时数字
    toggle : "a", // 倒计时定时器, "a" --》 domy.toggle.a
    doingfn : function (num) { // 倒计时进行中回调函数(回调num)
      $("#countDown").html(num);
      console.log(num);
    },
    endfn : function () { // 倒计时结束回调函数
      $("#countDown").html("完成");
    }
  }
  */
  exports.open = function (json) {
    var countTimer = null,
        toggle = {},
        countNumber = parseInt(json.num) || 0;

    if (json.toggle !== undefined) {
      toggle = domy.toggle;
    }

    clearInterval(countTimer);

    json.doingfn && json.doingfn(countNumber);

    countTimer = setInterval(function(){
      countNumber--;
      if (countNumber <= 0) {
        json.endfn && json.endfn();
        clearInterval(countTimer);
      } else {
        json.doingfn && json.doingfn(countNumber);
      }

      if (toggle[json.toggle] === false) {
        json.endfn && json.endfn();
        clearInterval(countTimer);
      }
    }, 1000);
  };
});