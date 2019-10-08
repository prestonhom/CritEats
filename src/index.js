import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App/App';
// import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'


ReactDOM.render(
  <Router>
    <NavBar />
    <Route component={App}/>
  
    </Router>,
  document.getElementById('root')
);
