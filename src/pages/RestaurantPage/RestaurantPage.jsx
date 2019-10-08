import React, {Component} from 'react';

class RestaurantPage extends Component{
    state = {
        restaurant: this.props.restaurant
    }

 
    render(){
        let restaurantName = this.state.restaurant ? this.state.restaurant.name : null
        let menuPhoto = this.state.restaurant.menu[0].menu_photo
    return(
        <div>
        
        {restaurantName}
        <img src={menuPhoto}/>
        
        </div>
        )
    }
    
}

export default RestaurantPage;