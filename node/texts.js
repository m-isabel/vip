var client = require('twilio')('AC73edc3b09e0ec9aa14418728b5a12a55', '4a32210c44d1c4be00d5ae4bb1a87e00');
// Use this convenient shorthand to send an SMS:
module.exports = {
  send_message: function(number, msg, callback){
client.sendSms({
  to:number,
  from:'4089400664',
  body: msg + '\n Please reply to this message!!'
}, function(error, message) {
  if (!error) {
    console.log('Success! The SID for this SMS message is:');
    console.log(message.sid);
    console.log('Message sent on:');
    console.log(message.dateCreated);
    callback();
  } else {
    console.log('Oops! There was an error.');
  }
});
  },
  check_messages: function(callback){
    client.messages('SM5f636e67fb029a53b9eaf02b5441fa4a').get(function(err, message, callback) { 
        console.log(message.body);
        callback();
    });

  }
 }
