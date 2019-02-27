import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//Functional Component
const Header = (props) => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">{branding}</a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/About" className="nav-link">
                <i className="fas fa-question"></i>About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home"></i>Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signin" className="nav-link">
                <i className="fas fa-sign-in-alt"></i>Sign-in
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

// Default Header if branding is not passed
Header.defaultProps = {
  branding: 'Playground'
}

// Validates the expected type of defined props
Header.propTypes = {
  branding: PropTypes.string.isRequired
};


export default Header;
