import React, { Component } from 'react';
import './App.css';
import {Link, Route, Switch, Redirect } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import MainPage from '../MainPage/MainPage';
import RestaurantPage from '../RestaurantPage/RestaurantPage'
import userService from '../../utils/userService';
import tokenService from '../../utils/tokenService';
import {getRestaurants} from '../../services/restaurant-api';

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
    console.log(this)
    console.log(id)
    return (this.state.restaurants[id]
    )
  }

  handleARestaurant=(idx)=>{
    console.log(this.state.restaurants[idx])
    return(this.state.restaurants[idx])
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
          <Route exact path='/' render={() =>(
            <MainPage
              restaurants={this.state.restaurants}
              handleARestaurant={this.handleARestaurant}
            />
          )}/>
          <Route path={`/restaurants/:id`} render={props=>
            <RestaurantPage
              {...props}
              restaurant={this.handleOneRestaurant(this.props.location.pathname.split('/')[2])}  
              
            />
          }
          />
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