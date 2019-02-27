import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'; // Productio
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Signin from './components/Signin';
import NotFound from './components/pages/NotFound';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <div className="App">
            <Header />
            <Switch>
               <Route exact path="/" component={Home} />
               <Route exact path="/about" component={About} />
               <Route exact path="/about/:id" component={About} />
               <Route exact path="/signin" component={Signin} />
               <Route component={NotFound} />
            </Switch>
            <Footer />
        </div>
      </div>
    </Router>
    );
  }
}

export default App;
