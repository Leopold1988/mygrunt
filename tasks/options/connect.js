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
            // var address = options.hostname + ":" + options.port;
            var csp = "default-src 'self' http://192.168.10.110:9000/; script-src 'self' 'unsafe-inline' http://192.168.10.110:35729/ http://192.168.10.110:9000/; object-src 'none'; img-src 'self'; media-src 'none'; frame-src 'none'; font-src 'none'; connect-src 'self' ws://192.168.10.110:35729/livereload; report-uri http://192.168.10.110:9000/";
            // res.setHeader("Content-Security-Policy", csp);
            // res.setHeader("X-Content-Security-Policy", csp);
            // res.setHeader("X-WebKit-CSP", csp);

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