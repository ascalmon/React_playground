import React from 'react'
import PropTypes from 'prop-types';
import '../../App.css';

//Functional Component
const Footer = (props) => {
  //console.log(props);
  const { owner } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3 py-0">
      <div className="row">
        <a href="/" className="navbar-brand">{owner}</a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

// Default Header if branding is not passed
Footer.defaultProps = {
  owner: 'DV'
}

// Validates the expected type of defined props
Footer.propTypes = {
  owner: PropTypes.string.isRequired
};


export default Footer;
