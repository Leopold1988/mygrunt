define(function(require, exports, module) {
  var obj = require("model/oninput_model/oninput");
  var index = 0;
  var mail = ["@qq.com", "@163.com", "@sina.com", "@sina.com.cn"];
  var userlist = [];

  // ["@qq.com", "@163.com", "@sina.com", "@sina.com.cn"].join(",").match(/sina/g);

  obj.oninput($("#placeholder input"), function() {
    var allli = "";

    if (this.value.search("@") !== -1) {
      // new RegExp(this.value, g)
      console.log(mail.join(","));
      console.log(new RegExp(this.value, "g"));
      console.log(userlist.join(",").match(new RegExp(this.value, "g")));
    } else {
      for (var i = 0; i < mail.length; i++) {
        userlist = [];
        userlist.push(this.value + "" + mail[i]);
        if (i === 0) {
          allli += "<li class='active'>" + this.value + "" + mail[i] + "</li>";
        } else {
          allli += "<li>" + this.value + "" + mail[i] + "</li>";
        }
      }
    }



    $("#placeholder .suggest").show().find("ul").html(allli);
    index = 0;

    if (this.value === "" || this.value === null) {
      $("#placeholder .suggest").hide();
    }
  });

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
      $("#placeholder .suggest").hide();
    }
  });
});