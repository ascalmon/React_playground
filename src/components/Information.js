import React from 'react'
//import PropTypes from 'prop-types';

//Functional Component
const Information = (props) => {

  //console.log(props);
  return (
      <React.Fragment>
      <div className="container " style={{textAlign:'center', color:'red'}}>
        <p>{props.username}</p>
      </div>
      </React.Fragment>

  );
}



export default Information;
