import React, { Component } from 'react';
import Information from './Information';
import axios from 'axios';
import '../App.css';

class  Signin extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    name: ''
  }


  componentDidMount(){
    axios
    .get(
      `https://cors-anywhere.herokuapp.com/https://react-api-ascalmon.herokuapp.com/users/${this.state.username}`)
    .then(res => {
     //console.log(res.data);
     if (res.data.length === 1)
     this.setState({username: res.data.username});
   })
   .catch(err => {
     console.log(err);
   })
 };

  onSubmit = (e) => {
    e.preventDefault();
    this.componentDidMount()
    // Redirect to home page
    //this.props.history.push('/' + `${this.state.username}`);
 };

  getInput = (event) => {
    //console.log(event.target.id);
    switch(event.target.id) {
      case 'username':
        this.setState({username: event.target.value});
        return;
      case 'email':
        this.setState({email: event.target.value});
        return;
      case 'password':
        this.setState({password: event.target.value});
        return;
      default:
        return;
    };
    //console.log('Username: ', this.state.username, 'Email: ',this.state.email, 'Password: ', this.state.password );
  };

  render() {
    return (
      <React.Fragment>
      <Information username="This is the Playground sign-in page coming from information component" />
      <form>
        <div className="form-group signin">
            <input type="text" className="form-control" id="username" placeholder="Enter Username" onChange={this.getInput} />
        </div>
        <div className="form-group signin">
            <input type="text" className="form-control" id="email" placeholder="Enter Email" onChange={this.getInput} />
        </div>
        <div className="form-group signin">
            <input type="text" className="form-control" id="password" placeholder="Enter Password" onChange={this.getInput} />
        </div>
        <button type="submit" className="btn btn-primary signin_btn" onClick={this.onSubmit}>Sign-in
        </button>
      </form>
      </React.Fragment>
    );
  }
}

export default Signin;
