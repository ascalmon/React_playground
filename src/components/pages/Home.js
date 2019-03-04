import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: this.props.value,
      last_access: '',
      email: ''
    }
  }
    searchData(username){
      //console.log(username);
      axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://react-api-ascalmon.herokuapp.com/users/${username}`)
      .then(res => {
       //console.log(res.data);
       if(res.data.length === 1){
          this.setState({username: res.data[0].username});
          this.setState({email: res.data[0].email});
          this.setState({last_access: this.state.username});
        }
     })
     .catch(err => {
       console.log(err);
     })
   };


  render() {
    console.log('Home', this.props.value);
    if(this.props.value !== '' && this.props.value !== this.state.last_access){
      console.log('Home', this.props.value);
      this.searchData(this.props.value);
    }
    return (
      <div>
        <h1 className="display-4">Playground Home Page</h1>
        <h4>Username:{this.props.value}</h4>
        <h4>Email:{this.state.email}</h4>
        <p className="lead">{this.state.username} Home Page</p>
        <p className="text-secondary">Version 1.0.0</p>
      </div>
    );
  }
}
export default Home;
