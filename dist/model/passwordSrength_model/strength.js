define(function(require, exports, module) {
  var rule = require("model/passwordSrength_model/strengthrule");
  exports.getStrength = function(passwd) {
    var intScore = 0; // 总分32

    for (var i = 0; i < rule.length; i++) {
      var re = rule[i].re,
          score = rule[i].score;
      if (re.length) { // 为多个正则验证
        if (passwd.match(re[0]) && passwd.match(re[1])) {
          intScore += score;
        }
      } else { // 单正则验证
        if (passwd.match(re)) {
          intScore += score;
        }
      }
    };

    // 大小写字母，数字和特殊字符 +2
    if (passwd.match(/[a-z]/) && passwd.match(/[A-Z]/) && passwd.match(/\d/) && passwd.match(/[!,@#$%^&*?_~]/))
    {
      intScore += 2;
    }

    return intScore;
  }
});