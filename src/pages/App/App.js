import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, Route, Switch, Redirect } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import MainPage from '../MainPage/MainPage';
import RestaurantPage from '../RestaurantPage/RestaurantPage'
import MenuList from '../../components/MenuList/MenuList'
import MenuPage from '../../pages/MenuPage/MenuPage'
import userService from '../../utils/userService';
import tokenService from '../../utils/tokenService';
import {getRestaurants} from '../../services/restaurant-api';



class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      restaurants: [],
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
    console.log('testttttttt')
    console.log(this.state.restaurants[id].menus)
    return (this.state.restaurants[id])
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
        <Switch>
          <Route exact path='/' render={() =>(
            <div>
            <img src='../../images/norma2d.png' style={{
              width:'100%',
              height:'100%'  
            }}/>

            </div>
          )}/>
          <Route exact path='/restaurants' render={() =>(
             this.state.restaurants.length
             ?
             
              <MainPage
                restaurants={this.state.restaurants}

              />
            :
            <h1>is Loading</h1>
          )}/>
          <Route exact path={'/restaurants/:id'} render={props=>
            this.state.restaurants.length
            ?
            <div> 
             <RestaurantPage
            {...props}
            restaurants={this.handleOneRestaurant} 

             />
            </div>
            :
            <h1>Loading</h1>
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