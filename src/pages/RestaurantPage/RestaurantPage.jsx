import React, {Component} from 'react';


class RestaurantPage extends Component{
    state = {
        restaurant: this.props.restaurants
    }


  
    
    render(){
        console.log('````````````````')
       
        let menus=this.state.restaurant.menus
        console.log(menus)
        let restaurantName = this.state.restaurants ? this.state.restaurants.name : null        
    return(

        <div>
            <h1>
        {menus}
        {this.state.restaurant.address}
        {restaurantName}
        
        </h1>
        <img style={{
            'width':'100px',
            'height':'100px'
        }}
        src={this.state.restaurant.restaurant_photo}></img>
        
        </div>
        )
    }
    
}

export default RestaurantPage;