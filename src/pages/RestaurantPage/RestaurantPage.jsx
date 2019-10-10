import React, {Component} from 'react';
import MenuList from '../../components/MenuList/MenuList'
import MenuPage from '../MenuPage/MenuPage'
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard'


class RestaurantPage extends Component{
    state = {
        restaurant: this.props.restaurants(this.props.match.params.id),
    }
    render(){
        return(
        <div>
                <RestaurantCard
                    address={this.state.restaurant.address}
                    name={this.state.restaurant.name}
                />
          
        <div>
        MENU ITEMS 
                <MenuList
                    menus={this.state.restaurant.menus}
                />
        </div>
            <img style={{
                'width':'100px',
                'height':'100px'
                }}
            src={this.state.restaurant.restaurant_photo} alt='restaurant_photo'></img>
        </div>
        )
    }
}

export default RestaurantPage;