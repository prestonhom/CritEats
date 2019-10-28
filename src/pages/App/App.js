import React, { Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Switch} from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import MainPage from '../MainPage/MainPage';
import AboutPage from '../AboutPage/AboutPage';
import RestaurantPage from '../RestaurantPage/RestaurantPage';
import Navigation from '../../components/NavBar/NavBar'
import userService from '../../utils/userService';
import {getRestaurants} from '../../services/restaurant-api';
import ReviewForm from '../../components/ReviewForm/ReviewForm';
import Reviews from '../../components/Reviews/Reviews'
import {getReviews} from '../../utils/reviewService'

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      restaurants: [],
      reviews: []
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
 
async componentDidMount(){
    const restaurant = await getRestaurants();
    const restaurantsObject= restaurant.result;
    const reviews = await getReviews({food:this.props.match.params.id});
    this.setState({
      restaurants: restaurantsObject,
      reviews: reviews
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
                  alt='something'
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
            reviews={this.state.reviews}
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
          <Route exact path={'/food/:id/review' } render={props =>
            this.state.restaurants.length
            ?
            <div> 
            <ReviewForm
            {...props}
            id={props.match.params.id}
            restaurants={this.handleOneRestaurant}
            userName={this.state.user.name}
            />
            </div>
            :
            <div>
            <h1>Loading...</h1>
            <div class="loader"></div>
            </div>
          }
          />
          <Route exact path={'/food/:id/reviews'} render={props=>
            this.state.reviews.length
            ?
            <div>
                {this.state.reviews.map((s)=>{
                  if(parseInt(props.match.params.id) === parseInt(s.food))
                  // console.log(this.props.match.params.id)
                    return(
                      <div> 
                        thiss is the food ID{s.food}
                        name right here//{s.userName}
                        stars right here//{s.stars}
                        {s.description}
                      </div>
                    )
                })}
                
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