import React, { Component } from 'react';
import axios from 'axios';
import uuid from 'uuid';

class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      username: this.props.value,
      last_access: '',
      email: '',
      ok: ''
    }
  }

  searchData(username){
    //console.log(username);
    axios
    .get(
      `https://cors-anywhere.herokuapp.com/https://react-api-ascalmon.herokuapp.com/users/${username}`)
    .then(res => {
      //console.log(res.request)
     if(res.data.length === 1 && username !== this.state.username){
        console.log(res.data);
        this.setState({username: res.data[0].username});
        this.setState({email: res.data[0].email});
      } else {
        //this.setState({username: ''});
        //this.setState({email: ''});
        this.setState({value: ''});
      }
      this.setState({last_access: this.props.value});
   })
   .catch(err => {
     console.log(err);
   })
 };


//  <table style={tableStyle}>
//    <tbody>
//        <tr style={rowStyle}>
//            <td style={leftColumnStyle}>Battery</td>
//            <td><StatsBar/></td>
//         </tr>
//    </tbody>
// </table>


 // createTable = () => {
   // let table = document.createElement('table');
   // let tr = table.appendChild(document.createElement('tr'));
   // let td = tr.appendChild(document.createElement('td'));
   // let data = td.appendChild(document.createTextNode('Column - ' + 1));
   // console.log(table, table.toString());
   //
   // return table.toString();
   // //div.innerHTML = table;

//
//   let table = [];
//   let final = [];
//
//   // Outer loop to create parent
//   for (let i = 0; i < 3; i++) {
//     let children = []
//     //Inner loop to create children
//     for (let j = 0; j < 5; j++) {
//       children.push(<td>{`Column ${j + 1}`}</td>)
//     }
//     //Create the parent and add the children
//     table.push(<tr>{children}</tr>);
//   }
//   final.push(<tbody>{table}</tbody>);
//   return table
// }

  render() {


    console.log('Home', this.props);
    if(this.props.value !== '' && this.props.value !== this.state.last_access){
      //console.log('Home', this.props.value);
      this.searchData(this.props.value);
    }
    return (
      <div>
        <h1 className="display-4">Playground Home Page</h1>
        <h4>Username:{this.state.username}</h4>
        <h4>Email:{this.state.email}</h4>

        <p className="lead">Home Page</p>
        <p className="text-secondary">Version 1.0.0</p>
      </div>
    );
  }
}
export default Home;
