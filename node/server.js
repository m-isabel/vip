var express=require('express');
var bodyparser = require('body-parser');
app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended:false}));

app.all('*', function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.post('/info', function(req, res, next){
   console.log(req.body);
   var to = req.body.phonenum;
   var message = req.body.message;
   var freq = req.body.message;
   //do twilio stuff
   //if no response after 3 texts send email
   //if no response call 911
   //

});

var server = app.listen(3000, function(){
  var host = server.address().address
  var port = server.address().port

  console.log('started app here');
});
