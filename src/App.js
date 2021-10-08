import React, { Component, Fragment } from 'react';
import './App.css';
import Home from './pages/home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Contact from './pages/contact';
import About from './pages/about';

const themes = {
  light: "#eeeeee",
  dark: "#222222",
};

export const ThemeContext = React.createContext(themes.light);

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      counter: 0,
    }
  }

  static getDerivedStateFromProps(props, state){
    return null;
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot){
  }

  request = async() => {
    const response = await fetch('http://192.168.88.45/xbitbucket/xtimesheet/public/login', {
      mode: 'no-cors',
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({
        name: 'elmar',
        password: '123456'
      })
    }).then(res => res.json()).catch(e => console.log('request error ===>',e))

    console.log('request result ===>', response)
  }
  componentDidMount(){
    this.request()
  }
  shouldComponentUpdate(nextProps, nextState){
    return true;
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    })
  }
  decrement = () => {
    this.setState({
      counter: this.state.counter - 1,
    })
  }
  onReset = () => {
    this.setState({
      counter: 0,
    })
  }

  render(){
    return(
      <ThemeContext.Provider value={themes.dark}>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
          <h1>Example</h1>
          <h2>Counter: {this.state.counter}</h2>
          {this.state.counter === 5 ? <h2>Max counter must be 5!</h2> : <Fragment />}
          <div style={{display: 'flex'}}>
            <button disabled={this.state.counter === 5} onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
            <button onClick={this.onReset}>Reset</button>
          </div>
          <Router>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Users</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route exact path="/">
                <Home title='Home' />
              </Route>
              <Route path="/contact">
                <Contact title='Contact' />
              </Route>
              <Route path="/about">
                <About title='About' />
              </Route>
            </Switch>
          </Router>
        </div>
      </ThemeContext.Provider>
    )
  }
}