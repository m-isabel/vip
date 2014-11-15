function create(username, password, email, firstname, lastname, phone){
  var user = new Parse.User();
  user.set("username", username);
  user.set("password", password);
  user.set("email", email);
  user.set("firstname", firstname);
  user.set("lastname", lastname);
  user.set("phone", phone);
  user.signUp(null, {
    success: function(user){
      var url = "http://m-isabel.github.io/vip/login.html";
      window.location.href=url; 
    }, error: function(user, error){
      alert("Error: " + error.code + " " + error.message);
    }
  });
};

function update(username, password, email, firstname, lastname, phone){
  var user = Parse.User.current();
  user.set("username", username);
  user.set("password", password);
  user.set("email", email);
  user.set("firstname", firstname);
  user.set("lastname", lastname);
  user.set("phone", phone);
  user.save(null, {
    success: function(user){
      window.location.href="http://m-isabel.github.io/vip/users.html";
    }, error: function(user, error){
        alert("Error: "+ error.code + " " + error.message);

    } });
};

function login(username, password){
  Parse.User.logIn(username, password, {
    success: function(user){
      var url = "http://m-isabel.github.io/vip/users.html";
      window.location.href=url;
    }, error: function(user, error){
        alert("Error: " + error.code + " " + error.message);
    }
    });
};

function newContact(fname, lname, email, phone, message, interval){
  var Contact = Parse.Object.extend("Contact");
  var contact = new Contact();
  contact.set("firstname", fname);
  contact.set("lastname", lname);
  contact.set("phone", phone);
  contact.set("email", email);
  contact.set("message", message);
  contact.set("interval", interval);
  contact.set("status", 'Active');
  contact.set("belongs_to", Parse.User.current());
  contact.save(null,{
    success: function(contact){
     var url = "http://m-isabel.github.io/vip/users.html";
     window.location.href=url;     
  }, error: function(contact, error){
     alert("Failed to add new contact! "+error.message);         
  }
});
};

function loginManager(func, callback){
  setTimeout(function(){
    func();
    if(callback){callback();}}, 5400000);

};

function logout(){
  Parse.User.logOut();
  var currentUser = Parse.User.current();
  window.location.href="http://m-isabel.github.io/vip/login.html";
}

/*
$(window).load(function() {
  Parse.initialize("");
}


$('#btn-login').click(function(e){
  var user = $('#user').val();
  var password = $('#pass').val();
  login(user, pass);
});
*/
