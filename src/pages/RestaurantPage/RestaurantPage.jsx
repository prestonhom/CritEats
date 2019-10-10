import React, {Component} from 'react';
import MenuList from '../../components/MenuList/MenuList'
import MenuPage from '../MenuPage/MenuPage'


class RestaurantPage extends Component{
    state = {
        restaurant: this.props.restaurants(this.props.match.params.id),
    }
    
    render(){
        return(
        <div>
            <h1>
                {this.state.restaurant.address}
                {this.state.restaurant.name}
            </h1>
        MENU ITEMS 
        <div>
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