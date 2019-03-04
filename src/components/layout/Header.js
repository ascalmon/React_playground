import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../../App.css';


//Functional Component
class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: this.props.value,
      search: ''
    }
    //handleChange = this.handleChange.bind(this);
  }


  handleChange(e){
  this.setState({ value: e.target.value });

  //console.log(e.target.value);
  }

  onSubmit(e){
    e.preventDefault();
    if (this.state.value !== '') {
      console.log('Search ', this.state.value);
      this.props.onChange(this.state.value);
    }
  }

  render(){
    const handleChange = this.handleChange.bind(this);
    const onSubmit = this.onSubmit.bind(this);

    const { branding } = this.props;

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a href="/" className="navbar-brand">{branding}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home"></i>Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <i className="fas fa-question"></i>About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signin" className="nav-link">
                <i className="fas fa-sign-in-alt"></i>Sign-in
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" onChange={handleChange} type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" onClick={onSubmit}type="submit">Search</button>
          </form>
        </div>
      </nav>
    );
  }
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
