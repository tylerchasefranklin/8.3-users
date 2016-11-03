var React = require('react');
var TemplateComponent = require('./template.jsx').TemplateComponent;
var User = require('../models/user').User;


var LoginFormSmart = React.createClass({
  getInitialState: function(){
    return {
      username: ''
    };
  },
  handleUsername: function(e){
    var username = e.target.value;
    this.setState({username: username});
  },
  handleLogin: function(e){
    e.preventDefault();
    var router = this.props.router;
    router.username = this.state.username;
    console.log(this.props);
    alert('you logged in');
    router.navigate('messaging/', {trigger: true});
    // this.setState({username: ''});
  },
  render: function(){
    return (
      <TemplateComponent>
        <div className="col-md-6">
          <h2>Please Login</h2>
          <div className="error"></div>
          <form id="login" onSubmit={this.handleLogin}>
            <div className="form-group">
              <label htmlFor="email-login">Email address</label>
              <input onChange={this.handleUsername} value={this.state.username} className="form-control" name="email" id="email-login" type="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password-login">Password</label>
              <input className="form-control" name="password" id="password-login" type="password" placeholder="Password" />
            </div>

            <input className="btn btn-primary" type="submit" value="Login" />
          </form>
        </div>
        <div className="col-md-6">
          <h2>Need an Account? Sign Up!</h2>
          <form id="signup">

            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input className="form-control" name="email" id="email" type="email" placeholder="email" />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input className="form-control" name="password" id="password" type="password" placeholder="Password" />
            </div>

            <input className="btn btn-primary" type="submit" value="Sign Me Up!" />
          </form>

        </div>
      </TemplateComponent>
    )
  }
});



module.exports = {
  LoginFormSmart: LoginFormSmart
};
