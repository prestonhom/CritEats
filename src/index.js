import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App/App';
// import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './components/NavBar/NavBar'


ReactDOM.render(
  <Router>
    <Navigation />
    <Route component={App}/>
  
    </Router>,
  document.getElementById('root')
);
