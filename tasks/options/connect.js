module.exports = exports = {
  options: {
    port: 9000,
    open: true,
    livereload: true,
    hostname: (function(){
      var os = require('os'), interfaces = os.networkInterfaces();
      var ipFilter = function(addr) {
        return (addr.family === 'IPv4' && addr.address.match(/^(192|172|10)\./));
      };

      for (var i in interfaces) {
        if (i.match(/^(VirtualBox|VMware)/)) {
          continue;
        }
        var ip = interfaces[i].filter(ipFilter);
        if (ip.length) {
          var hostname = ip.shift().address;
          return hostname;
        }
      }
      return "localhost";
    })()
  },
  server: {
    options: {
       middleware: function (connect, options, middlewares) {
          // inject a custom middleware
          middlewares.unshift(function (req, res, next) {
              res.setHeader("csp-report", "default-src https://*.teambition.com; script-src https://dn-st.oss.aliyuncs.com https://hm.baidu.com https://cdn.mxpnl.com https://www.google-analytics.com; style-src data: 'unsafe-inline' https://dn-st.oss.aliyuncs.com; img-src data: blob: https://*.teambition.com https://dn-st.oss.aliyuncs.com https://dn-st.qbox.me https://hm.baidu.com https://www.google-analytics.com; frame-src https:; font-src https://dn-st.oss.aliyuncs.com; connect-src https://*.teambition.com wss://*.teambition.com https://api.mixpanel.com");
              //a console.log('foo') here is helpful to see if it runs
              return next();
          });

          return middlewares;
      }
    }
  }
};


// module.exports = exports = {
//   options: {
//     port: 9000,
//     open: true,
//     livereload: true,
//     hostname: "localhost",

//     // remove next from params
//     middleware: function(connect, options) {
//       return [
//         function(req, res, next) {
//           res.setHeader('Access-Control-Allow-Origin', '*');
//           res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//           res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

//           // don't just call next() return it
//           next();
//         }

//       ];
//     }
//   },
// };