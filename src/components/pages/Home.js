import React from 'react';

export default (props) => {
  //console.log(props)
  return (
    <div>
      <h1 className="display-4">Playground Home Page</h1>
    <h4>Username:{props.match.params.username}</h4>
      <p className="lead">Daniel's Home Page</p>
      <p className="text-secondary">Version 1.0.0</p>
    </div>
  );
};
