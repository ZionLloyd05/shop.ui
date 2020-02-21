import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import jwt_decode from 'jwt-decode';
import store from './store';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser } from './actions/authAction';
import './App.css';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Dashboard from './components/Dashboard/Dashboard';

/**
 * Authentication check logic
 */
if(localStorage.jwtToken){
  const token = localStorage.jwtToken;

  // set the auth token header auth
  setAuthToken(token);

  // decode token
  const decoded = jwt_decode(token);

  store.dispatch(setCurrentUser(decoded));
}

function App() {
  return (
    <Provider store={ store }>
      <Router>
        <div className="App">
          <Navbar/>
            <Route exact path="/" component={ Landing }/>
            <div className="container">
              <Route path="/register" component={ Register }/>
              <Route path="/login" component={ Login }/>
              <Route path="/dashboard" component={ Dashboard }/>
            </div>
          <Footer/>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
