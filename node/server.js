var express=require('express');
var bodyparser = require('body-parser');
var twilio = require('./texts.js');
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
   var count = 0;
   var phonenum = req.body.phone;
   var msg = req.body.message;
   var freq = req.body.inta;
   twilio.send_message(phonenum, msg, function(){
      while(!twilio.check_messages(function({
          count = -1;
      });)){
        count++;
        else if(count === 60){
            //call em
        }
        nonexistentFunc();

   }
   //do twilio stuff
   //if no response after 3 texts send email
   //if no response call 911
   //

});

process.on('uncaughtException', function(err) {
    console.log('Caught exception: ' + err);
});

setTimeout(function() {
    console.log('This will still run.');
}, 500);

var server = app.listen(3000, function(){
  var host = server.address().address
  var port = server.address().port

  console.log('started app here');
});
