var Backbone = require('backbone');


var Message = Backbone.Model.extend({
  defaults: {
    content: '',
    time: ''
  },
  idAttribute: '_id'
});

var MessageCollection = Backbone.Collection.extend({
  model: Message,
  url: 'https://tiny-parse-server.herokuapp.com/',
  comparator: function(model){
    return model.time;
  }
});



module.exports = {
  Message: Message,
  MessageCollection: MessageCollection
};
