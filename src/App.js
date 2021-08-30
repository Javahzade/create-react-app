import { Component, Fragment } from 'react';
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

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      counter: 0,
    }
    console.log('constructor props =>', props);
  }

  static getDerivedStateFromProps(props, state){
    console.log('getDerivedStateFromProps props =>', props);
    console.log('getDerivedStateFromProps state =>', state);
    return null;
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('getSnapshotBeforeUpdate prevProps =>', prevProps);
    console.log('getSnapshotBeforeUpdate prevState =>', prevState);
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('componentDidUpdate prevProps =>', prevProps);
    console.log('componentDidUpdate prevState =>', prevState);
    console.log('componentDidUpdate snapshot =>', snapshot);
  }
  componentDidMount(){
    console.log('componentDidMount');
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log('shouldComponentUpdate nextProps =>', nextProps);
    console.log('shouldComponentUpdate nextState =>', nextState);
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
    console.log('render')
    return(
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
    )
  }
}