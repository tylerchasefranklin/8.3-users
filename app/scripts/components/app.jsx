var React = require('react');

var User = require('../models/user').User;
var MessageCollection = require('../models/message').MessageCollection;
var MessagesSmart = require('./messages.jsx').MessagesSmart;

var AppDumb = React.createClass({
  render: function(){
    return (
      <header className="chat-header">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h1>Chat App</h1>
            </div>
          </div>
        </div>
      </header>
    );
  }
});

var MessageBody = React.createClass({
  render: function(){
    return (
      <div className="msg msg-default">
        <span className="date-text">{this.props.date}</span>
        <span className="chat-text">{this.props.user}: {this.props.content}</span>
      </div>
    )
  }
});

var MessageView = React.createClass({
  render: function(){
    var messages = this.props.messageData.map(function(message){
      return (
        <MessageBody
          key={message.get('_id') || message.cid}
          content={message.get('content')}
          user={message.get('username')}
          date={message.get('date')}
        />
      );
    });

    return (
      <section className="chat-wrap">

        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1">

              <div className="chat-window">
                {messages}
              </div>

            </div>
          </div>
        </div>

      </section>
    );
  }
});


var AppSmart = React.createClass({
  getInitialState: function(){
    var self = this;
    var messages = new MessageCollection();

    messages.fetch().then(function(data){
      messages.sort();
      self.setState({collection: messages});
    });
    return {
      collection: messages
    }
  },
  submitMessage: function(input){
    this.state.collection.create(input);
    this.setState({collection: this.state.collection});
    // console.log(this.props.router);
  },
  componentWillMount: function() {
    var router = this.props.router;
    // console.log(router);
    var username = router.username;
    // console.log('mounting', username);
    if (username ===  undefined){
      router.navigate('', {trigger: true});
    }
  },
  componentDidMount: function(){
    var self = this;
    setInterval(function(){
      self.state.collection.fetch().then(function(data){
        self.setState({collection: self.state.collection});
      });
    }, 2000)
  },
  componentWillUnmount: function(){
    clearInterval();
  },
  render: function(){
    return (
      <div className="wrapper">
        <AppDumb />
        <MessageView messageData={this.state.collection} />
        <MessagesSmart submitMessage={this.submitMessage}  />
      </div>
    );
  }
});

module.exports = {
  AppSmart: AppSmart
};
