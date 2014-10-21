define(function(require, exports, module) {
  $(function(){
    $("#inline,#ajax").hipopup({
      follow:false,
      bg:true,
      ajax:true,
      border:true,
      bgcss:{opacity:0.5},
      ajaxcallback:function (id) {
        callbackFn(id);
      }
    });
  });

  function callbackFn (id) {
    switch (id) {
      case "ajax" :
        pictureFn();
        break;
    }
  }

  function pictureFn(){
    $("#ajax2").hipopup({
      follow:false,
      bg:false,
      ajax:true,
      border:true,
      bgcss:{opacity:0.5},
      ajaxcallback:function (id) {
        callbackFn(id);
      }
    });
  }
});