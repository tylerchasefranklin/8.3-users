var $ = require('jquery');

$.ajaxSetup({
  beforeSend: function(xhr){
    xhr.setRequestHeader('X-Parse-Application-Id', 'tiygvl');
    xhr.setRequestHeader('X-Parse-REST-API-Key', 'slumber');
  }
});


var url = 'https://tiny-parse-server.herokuapp.com/classes/Chase';
var resultPromise = $.ajax(url).then(function(data){
  console.log(data);
});


$('#signup').on('submit', function(e){
  e.preventDefault();

  var data = {
    'username': $('#email').val(),
    'password': $('#password').val()
  };
  var url = 'https://tiny-parse-server.herokuapp.com/';

  $.post(url + 'users', data).then(function(response){
    console.log(response);
    alert('Now sign in!');
  });
});

$('#login').on('submit', function(e){
  e.preventDefault();
  var url = 'https://tiny-parse-server.herokuapp.com/';

  var username = $('#email-login').val();
  var password = $('#password-login').val();
  var loginUrl = url + 'login?username=' + encodeURI(username) + '&password=' + encodeURI(password);
  console.log(loginUrl);
  $.ajax(loginUrl, {
    success: function(response){
      alert('You logged in!');
    },
    error: function(xhr){
      $('.error').html(xhr.responseJSON.error);
    }
  });
});
