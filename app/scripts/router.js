var Backbone = require('backbone');
var $ = require('jquery');
var React = require('react');
var LoginFormSmart = require('./components/login.jsx').LoginFormSmart;
var ReactDOM = require('react-dom');
var User = require('./models/user').User;
var MessagesSmart = require('./components/messages.jsx').MessagesSmart;
var AppSmart = require('./components/app.jsx').AppSmart;


var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'messaging/': 'messaging',
  },
  initialize: function(){
    // this.user = new User();
  },
  index: function(){
    ReactDOM.render(
      React.createElement(LoginFormSmart, {router: this}),
      document.getElementById('app')
    );
  },
  messaging: function(){
    ReactDOM.render(
      React.createElement(AppSmart, {router: this}),
      document.getElementById('app')
    );
  }

});





var router = new AppRouter();

module.exports = router;
