import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import MainPage from '../MainPage/MainPage';
import AboutPage from '../AboutPage/AboutPage';
import RestaurantPage from '../RestaurantPage/RestaurantPage';
import Navigation from '../../components/NavBar/NavBar'
import userService from '../../utils/userService';
import { getRestaurants } from '../../services/restaurant-api';
import ReviewForm from '../../components/ReviewForm/ReviewForm';
import Reviews from '../../components/Reviews/Reviews'
import { getReviews, deleteReview } from '../../utils/reviewService'
import Media from 'react-bootstrap/Media'

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      restaurants: [],
      reviews: [],
    };
  }
  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }

  handleOneRestaurant = (id) => {
    return (this.state.restaurants[id])
  }

  deleteThisReview = async review=>{
    const user = await userService.getUser()
    await deleteReview({
      food:this.props.match.params.id,
      id: this.state.reviews._id
    })
    let reviews = await getReviews({food:this.props.match.params.id})
    this.setState({
      reviews: reviews
    })

  }
  handleDelete =(review)=>{
    
    return(
    (this.state.user.name === review.userName)
    ?
    <a style={{color:'red'}} href="#top" onClick={(review) => this.deleteThisReview(review._id)}>Delete</a>
    :
    <h2 style={{color:'red'}}> not a user</h2>
    )
  }
  
  
  handleStarRatings = (numberOfStars) => {
    numberOfStars = parseInt(numberOfStars)
    if (numberOfStars === 1) {
      return ['stars']
    }
    if (numberOfStars === 2) {
      return ['stars', 'stars']
    }
    if (numberOfStars === 3) {
      return ['stars', 'stars', 'stars']
    }
    if (numberOfStars === 4) {
      return ['stars', 'stars', 'stars', 'stars']
    }
    if (numberOfStars === 5) {
      return ['stars', 'stars', 'stars', 'stars', 'stars']
    }
  }



  async componentDidMount() {
    const restaurant = await getRestaurants();
    const restaurantsObject = restaurant.result;
    const reviews = await getReviews({ food: this.props.match.params.id });
    this.setState({
      restaurants: restaurantsObject,
      reviews: reviews,
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
          <Route exact path='/' render={() => (
            <div>
              <img src='../../images/norma2d.png'
                alt='something'
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute'
                }}
              />
            </div>
          )} />
          <Route exact path='/restaurants' render={() => (
            this.state.restaurants.length
              ?
              <MainPage
                search={this.state.search}
                updateSearch={this.updateSearch}
                restaurants={this.state.restaurants}
              />
              :
              <div>
                <h1>Loading...</h1>
                <div class="loader"></div>
              </div>
          )} />
          <Route exact path={'/restaurants/:id'} render={props =>
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
          <Route exact path={'/restaurants/:id/menu'} render={props =>
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
          <Route exact path={'/food/:id/review'} render={props =>
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
          <Route exact path={'/food/:id/reviews'} render={props =>
            this.state.reviews.length
              ?
              <div>
                {this.state.reviews.map((s) => {
                  if (parseInt(props.match.params.id) === parseInt(s.food))
                    return (
                      <div>
                        <ul className="list-unstyled">
                          <Media as="li">
                            <img
                              width={64}
                              height={64}
                              className="mr-3"
                              src='https://image.flaticon.com/icons/svg/149/149071.svg'
                              alt="Generic placeholder"
                            />
                            <Media.Body>
                              {this.handleStarRatings(s.stars).map((t) => {
                                return (
                                  <img src='https://image.flaticon.com/icons/svg/616/616489.svg'></img>
                                )
                              })
                              }
                              <p>
                                {s.userName} <span style={{ fontSize: '20px' }}> says </span>
                                {s.description}
                                {this.handleDelete(s)}
                              </p>
            
                              
                            </Media.Body>
                          </Media>
                        </ul>
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
          <Route exact path='/about' render={() =>
            <AboutPage
            />
          } />
          <Route exact path='/signup' render={({ history }) =>
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          } />
          <Route exact path='/login' render={({ history }) =>
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          } />
        </Switch>
      </div>
    );
  }
}

export default App;