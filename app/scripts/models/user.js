var Backbone = require('backbone');


var User = Backbone.Model.extend({
  defaults: {
    username: ''
  },
  idAttribute: '_id'
});

var UserCollection = Backbone.Collection.extend({
  model: User,
  url: 'https://tiny-parse-server.herokuapp.com/'
});


module. exports = {
  User: User,
  UserCollection: UserCollection
};
