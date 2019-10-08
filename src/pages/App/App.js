import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import MainPage from '../MainPage/MainPage';
import userService from '../../utils/userService';
import tokenService from '../../utils/tokenService';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      restaurants: []
    };
  }
  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  handleOneRestaurant=(id)=>{
    return (
    this.state.restaurants[id]
    )
  }


async componentDidMount(){
    const restaurant = await getRestaurants();
    const restaurantsObject= restaurant.result;
    this.setState({
      restaurants: restaurantsObject
    })
   
  }
  render() {
    return (
      <div>
        <header className='header-footer'>CRITEATS</header>
        <Switch>
          <Route exact path='/' render={() =>
            <MainPage
            
            />
          }/>
        
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/login' render={({ history }) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;