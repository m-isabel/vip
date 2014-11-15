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
      $('#btn-signup').submit();
      var url = "http://m-isabel.github.io/vip/users.html";
      $(location).attr('href', url);
    }, error: function(user, error){
      alert("Error: " + error.code + " " + error.message);
    }
  });
};

function login(username, password){
  Parse.User.logIn(username, password, {
    success: function(user){
       $('#btn-login').submit();
    }, error: function(user, error){
        alert("Error: " + error.code + " " + error.message);
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
