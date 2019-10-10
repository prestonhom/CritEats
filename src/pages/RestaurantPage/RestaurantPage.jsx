import React, {Component} from 'react';
import MenuList from '../../components/MenuList/MenuList'
import MenuPage from '../MenuPage/MenuPage'
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard'
import RestaurantDetailCard from '../../components/MenuCard/MenuCard'

class RestaurantPage extends Component{
    state = {
        restaurant: this.props.restaurants(this.props.match.params.id),
    }
    render(){
        return(
            <div>
        MENU ITEMS 
        <img style={{
            'width':'100px',
            'height':'100px'
        }}
        src={this.state.restaurant.restaurant_photo} alt='restaurant_photo'></img>
                <MenuList
                    menus={this.state.restaurant.menus}
                />
        </div>
        )
    }
}

export default RestaurantPage;