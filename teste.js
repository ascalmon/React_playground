
var http = require('http');

// http.get(
//   'http://react-api-ascalmon.herokuapp.com/users/ascalmon',
//    function(res) {
//      var text = '';
//      res.on('data', function(chunk) {
//        text += chunk;
//      });
//      res.on('end', function() {
//        console.log(text);
//      });
//    }).on('error', function(e) {
//      console.log('Got error: ' + e.message);
// });
// Arrow function version
http.get(
  'http://react-api-ascalmon.herokuapp.com/users/ascalmon',
   res => {
     var text = '';
     res.on('data', chunk => {
       text += chunk;
     });
     res.on('end', () => {
       console.log(text);
     });
   }).on('error', e => {
     console.log('Got error: ' + e.message);
});
