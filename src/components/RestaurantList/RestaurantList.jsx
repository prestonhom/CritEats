import React, {Component} from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import Restaurant from '../Restaurant/Restaurant'
import {getRestaurants} from '../../services/restaurant-api';

class RestaurantList extends Component {
    state = {
        restaurants:[]
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
    render(){
        return(
            <div>
                 
            {this.state.restaurants.map((s,idx)=>{
               return(
                <Link 
                key={idx}
                to={`/result/${idx}`}
                >

                {s.name}

                </Link>
               )
                
            })}
           
       
        {/* <Route path={`/restaurant/:id`} render={props=>
        <Restaurant 
           {...props}
          restaurant={this.handleOneRestaurant}
            
        />
          
        
      }
      /> */}

     

            
            </div>
            )
        }
}
export default RestaurantList;