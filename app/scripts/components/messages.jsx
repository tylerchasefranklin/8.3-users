var React = require('react');


var MessagesSmart = React.createClass({
  getInitialState: function(){
    return {
      messageInput: ''
    }
  },
  typeMessage: function(e){
    var string = e.target.value;
    this.setState({messageInput: string});
  },
  handleSubmit: function(e){
    e.preventDefault();
    var messageInput = {
      content: this.state.messageInput,
      username: this.state.currentUser,
      time: new Date().getTime(),
    };
    this.props.submitMessage(messageInput);
    this.setState({messageInput: ''});
  },
  render: function(){
    return (
      <footer className="message-composer">
        <div className="container">
          <div className="form-group">
            <form action="" onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col-xs-11">
                  <input onChange={this.typeMessage} value={this.state.messageInput} type="text" name="message" className="form-control"/>
                </div>
                <div className="col-xs-1">
                  <input type="submit" value="Send" className="form-control btn btn-primary"/>
                </div>
              </div>
              <input type="hidden" name="username" value={this.state.currentUser} />
            </form>
          </div>
        </div>
      </footer>
    )
  }
})


module.exports = {
  MessagesSmart: MessagesSmart
};
