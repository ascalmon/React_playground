import React from 'react'
//import PropTypes from 'prop-types';

//Functional Component
const Information = (props) => {

  const texto = props.username;
  //console.log(props);
  return (
      <React.Fragment>
      <div className="container">
        <p>{texto}</p>
      </div>
      </React.Fragment>

  );
}



export default Information;
