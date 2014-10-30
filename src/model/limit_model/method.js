var exports = {};
// 获取字符长度&截取字符串(取决去是否有maxlength参数)
// 参数：
//  str 字符串
//  maxlength(可选) 数字类型0~无限(最大字节长度)，超过部分截取。
//  charset 编码集合(可选)

/*
exports.limit("aabbcc", 200, "utf-8");
*/

exports.limit = function(str, maxlength, charset){
  var total = 0,
      charCode,
      i,
      len,
      newstr = "";

  charset = charset ? charset.toLowerCase() : '';

  if (charset === 'utf-16' || charset === 'utf16') {
    for (i = 0, len = str.length; i < len; i++) {
      charCode = str.charCodeAt(i);
      if(charCode <= 0xffff){
        total += 2;
      }else{
        total += 4;
      }

      if (maxlength) {
        newstr += str[i];
        if (total > maxlength) {
          return newstr;
        }
      }
    }
  } else {
    for (i = 0, len = str.length; i < len; i++) {
      charCode = str.charCodeAt(i);
      if (charCode <= 0x007f) {
        total += 1;
      } else if (charCode <= 0x07ff) {
        total += 2;
      } else if(charCode <= 0xffff) {
        total += 3;
      } else {
        total += 4;
      }

      if (maxlength) {
        newstr += str.charAt(i);
        if (total >= maxlength) {
          return newstr + "...";
        }
      }
    }
  }

  if (maxlength) {
    return newstr;
  } else {
    return total;
  }
};

// ajax
// 参数：
//  type:传输类型，get||post
//  url:相对路径，abc/index.js
//  data:数据，{name:'asher',sex:'male'}
//  success:成功回调
//  failed:失败回调

/*
调用：
var sendData = {name:'asher',sex:'male'};
Ajax('get', 'data/data.html', sendData, function(data){
    console.log(data);
}, function(error){
    console.log(error);
});
*/
exports.Ajax = function (type, url, data, success, failed) {
  // 创建ajax对象
  var xhr = null;
  if(window.XMLHttpRequest){
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject('Microsoft.XMLHTTP')
  }

  var type = type.toUpperCase();
  // 用于清除缓存
  var random = Math.random();

  if(typeof data == 'object'){
    var str = '';
    for(var key in data){
        str += key+'='+data[key]+'&';
    }
    data = str.replace(/&$/, '');
  }

  if(type == 'GET'){
    if(data){
        xhr.open('GET', url + '?' + data, true);
    } else {
        xhr.open('GET', url + '?t=' + random, true);
    }
    xhr.send();
  } else if(type == 'POST'){
    xhr.open('POST', url, true);
    // 如果需要像 html 表单那样 POST 数据，请使用 setRequestHeader() 来添加 http 头。
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(data);
  }

  // 处理返回数据
  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
      if(xhr.status == 200){
        success(xhr.responseText);
      } else {
        if(failed){
          failed(xhr.status);
        }
      }
    }
  };
};