import React, {Component} from 'react';
import MenuList from '../../components/MenuList/MenuList'


class RestaurantPage extends Component{
    state = {
        restaurant: this.props.restaurants(this.props.match.params.id),
        menu: []
    }
    componentDidMount(){
        this.setState({
            menu: this.state.restaurant.menus
        })
    }
   
    render(){
      
        let restaurantName = this.state.restaurants ? this.state.restaurants.name : null        
    return(

        <div>
            <h1>
        
        {this.state.restaurant.address}
        {restaurantName}
        
        </h1>
        MENU ITEMS 
        <MenuList />
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