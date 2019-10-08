import React, {Component} from 'react';

class RestaurantPage extends Component{
    state = {
        restaurant: this.props.restaurant
    }

 
    render(){
        let restaurantName = this.state.restaurant ? this.state.restaurant.name : null
    return(
        <div>
        
        {restaurantName}
        
        </div>
        )
    }
    
}

export default RestaurantPage;