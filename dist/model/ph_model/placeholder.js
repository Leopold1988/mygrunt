define(function(require, exports, module) {
  exports.open = function () {
    var pwdField, pwdVal, pwdPlaceholder;
    if (!Modernizr.input.placeholder) {

      $("#netpas,#phonenum").removeAttr('placeholder');
      $("input").not("input[type='password']").each(function(){ //把input绑定事件 排除password框
        if ( ($(this).attr("id") !== "phonenum") || ($(this).attr("id") !== "netpas") ) {
          if ($(this).val() === "" && $(this).attr("placeholder") !== "") {
            $(this).val($(this).attr("placeholder"));
            $(this).focus(function(){
              if ($(this).val() === $(this).attr("placeholder")) {
                $(this).val("");
              }
            });
            $(this).blur(function(){
              if ($(this).val() === "") {
                $(this).val($(this).attr("placeholder"));
              }
            });
          }
        }
      });

      //对password框的特殊处理1.创建一个text框 2获取焦点和失去焦点的时候切换
      pwdField = $("input[type=password]");
      pwdVal = pwdField.attr('placeholder');
      pwdField.after('<input id="pwdPlaceholder" type="text" value=' + pwdVal + ' autocomplete="off" />');
      pwdPlaceholder = $('#pwdPlaceholder');
      pwdPlaceholder.show();
      pwdField.hide();

      pwdPlaceholder.focus(function(){
        pwdPlaceholder.hide();
        pwdField.show();
        pwdField.focus();
      });

      pwdField.blur(function(){
        if(pwdField.val() === '') {
          pwdPlaceholder.show();
          pwdField.hide();
        }
      });
    }
  };
});