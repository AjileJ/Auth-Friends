import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Login from './components/Login';
import Friends from './components/Friends';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
     <div className = 'nav'>
       <Link to ='/login'>Login</Link>
       <Link to ='/friends'>Friends</Link>
     </div>
     <Switch>
       <PrivateRoute exact path = '/friends' component = {Friends}/>
       <Route path = '/login' component = {Login}/>
       <Route component = {Login} />
     </Switch>
    </div>
    </Router>
  );
}

export default App;
