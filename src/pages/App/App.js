import React, { Component, Form,Button,FormGroup, Group } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, Route, Switch, Redirect } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import MainPage from '../MainPage/MainPage';
import AboutPage from '../AboutPage/AboutPage';
import RestaurantPage from '../RestaurantPage/RestaurantPage'
import Navigation from '../../components/NavBar/NavBar'
import MenuList from '../../components/MenuList/MenuList'
import MenuPage from '../../pages/MenuPage/MenuPage'
import MenuCard from '../../components/MenuCard/MenuCard'
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
   
    return (this.state.restaurants[id])
  }
  handleOneMenu=(id)=>{
    return(this.state.restaurants.menus[id])
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
        <Navigation 
          user={this.state.user}
          logout={this.handleLogout}
        />
        <Switch>
          <Route exact path='/' render={() =>(
            <div>
                <img src='../../images/norma2d.png' 
                  style={{
                  width:'100%',
                  height:'100%',
                  position:'absolute'
                  }}
                />
            </div>
          )}/>
          <Route exact path='/restaurants' render={() =>(
             this.state.restaurants.length
             ?
              <MainPage
                restaurants={this.state.restaurants}
              />
            :
            <div>
            <h1>Loading...</h1>
            <div class="loader"></div>
            </div>
          )}/>
          <Route exact path={'/restaurants/:id' } render={props=>
            this.state.restaurants.length
            ?
            <div> 
             <RestaurantPage
            {...props}
            restaurants={this.handleOneRestaurant} 
             />
            </div>
            :
            <div>
            <h1>Loading...</h1>
            <div class="loader"></div>
            </div>
          }
          />
            <Route exact path={'/restaurants/:id/menu' } render={props=>
            this.state.restaurants.length
            ?
            <div> 
             <RestaurantPage
             {...props}
             restaurants={this.handleOneRestaurant}
             
             />
             
            </div>
            :
            <div>
            <h1>Loading...</h1>
            <div class="loader"></div>
            </div>
          }
          />
            <Route exact path={'/restaurants/:id/menu/:idx' } render={props=>
            this.state.restaurants.length
            ?
            <div> 
             <RestaurantPage
             {...props}
             restaurants={this.handleOneRestaurant}
             
             />
             
            </div>
            :
            <div>
            <h1>Loading...</h1>
            <div class="loader"></div>
            </div>
          }
          />
          
          <Route exact path={'/restaurants/:id/menu/:id/createreview' } render={props=>
            this.state.restaurants.length
            ?
            <div> 
             <RestaurantPage
             {...props}
             restaurants={this.handleOneRestaurant}
             
             />
             
            </div>
            :
            <div>
            <h1>Loading...</h1>
            <div class="loader"></div>
            </div>
          }
          />
          <Route exact path={'/restaurants/:id/menu/:id/reviews' } render={props=>
            this.state.restaurants.length
            ?
            <div> 
             <RestaurantPage
             {...props}
             restaurants={this.handleOneRestaurant}
             
             />
             
            </div>
            :
            <div>
            <h1>Loading...</h1>
            <div class="loader"></div>
            </div>
          }
          />
          
        
          <Route exact path='/about' render={( ) => 
            <AboutPage
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