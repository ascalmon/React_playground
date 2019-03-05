import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'; // Production
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Signin from './components/Signin';
import NotFound from './components/pages/NotFound';
import './App.css';

class App extends Component {

  constructor(){
    super()
    this.state = {
      title: '',
      sign: ''
    }
  }

  onChange(text){
    this.setState({
      title: text
    });
  }

  onSignin(text){
    this.setState({
      sign: text
    });
  }


  render() {
    this.onChange = this.onChange.bind(this);
    this.onSignin = this.onSignin.bind(this);

    return (
      <Router>
        <div className="header">
          <div className="App">
            <Header onChange={this.onChange} value={this.state.title} branding="Playground"/>
            <Switch>
               <Route exact path="/"
                render={(props) => <Home {...props} value={this.state.title} />} />
              <Route exact path="/about"
                render={(props) => <About {...props} sinal={this.state.sign}/>} />
               <Route exact path="/about/:id" component={About} />
               <Route
                 exact path="/signin"
                 render={(props) => <Signin onChange={this.onSignin} sinal={this.state.sign}/>} />
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
