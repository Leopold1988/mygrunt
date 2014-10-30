define(function(require, exports, module) {
  var obj = require("model/oninput_model/oninput");
  var index = 0;
  var mail = ["@qq.com", "@163.com", "@sina.com", "@sina.com.cn"];
  var userlist = [];

  // ["@qq.com", "@163.com", "@sina.com", "@sina.com.cn"].join(",").match(/sina/g);

  obj.oninput($("#placeholder input"), function() {
    var allli = "";

    if (this.value.search("@") !== -1) {
      // console.log(new RegExp(this.value.match(/@.*/)));
      // console.log(mail.join(","));
      var re = /([a-zA-Z0-9_]+)(@[a-zA-Z0-9]*\.?[a-zA-Z0-9]*\.?[a-zA-Z0-9]*)/;
      re.test(this.value);
      var mailname = RegExp.$1;
      var mailSuffix = RegExp.$2;

      var b = new RegExp(mailSuffix);
      console.log(b);

      for (var k = 0; k < mail.length; k++) {

        var a = mail[k].search(b);

        if (a !== -1) {
          allli += "<li>" + mailname + "" + mail[k] + "</li>";
        }
      }
    } else {
      for (var i = 0; i < mail.length; i++) {
        userlist = [];
        userlist.push(this.value + "" + mail[i]);
        allli += "<li>" + this.value + "" + mail[i] + "</li>";
      }
    }

    $("#placeholder .suggest").show().find("ul").html(allli).find("li:eq(0)").addClass('active');

    $("#placeholder .suggest ul li").on({
      mouseover : function(){
        $("#placeholder .suggest ul li").removeClass('active').eq($(this).index()).addClass('active');
      },
      mouseout : function(){
        $("#placeholder .suggest ul li").removeClass('active').eq(0).addClass('active');
      },
      click : function(){
        $("#placeholder input").val($(this).html());
        $("#placeholder .suggest").hide();
      }
    });
    index = 0;

    if (this.value === "" || this.value === null) {
      $("#placeholder .suggest").hide();
    }
  });

  $("#placeholder input").on({
    keydown : function(e){
      switch (e.which) {
        case 13:
          var mail = $("#placeholder .suggest ul li").eq(index).html();
          $("#placeholder input").val(mail);
          $("#placeholder .suggest").hide();
          break;
        case 8:
        case 46 :
          break;
        case 38: // 上
          index--;
          if (index < 0) {
            index = 0;
          }
          break;
        case 40: // 下
          index++;
          var length = $("#placeholder .suggest ul li").length - 1;
          if (index > length) {
            index = length;
          }
          break;
      }

      $("#placeholder .suggest ul li").removeClass('active').eq(index).addClass('active');
    },
    blur : function(){
      // $("#placeholder .suggest").hide();
    }
  });
});