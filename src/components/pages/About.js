import React from 'react';

export default (props) => {
  return (

    <div>
      {console.log(props)};

        <h1 className="display-4">About Page</h1>

      <h4>ID:value={props.sinal}</h4>
      <p className="lead">About Daniel Valle</p>
      <p className="text-secondary">Version 1.0.0</p>
    </div>
  );
};
