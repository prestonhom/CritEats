import React, {Component} from 'react';
import {Link} from 'react-router-dom';
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
        MENU CATEGORIES
        <Link to='/restaurants/'>
            Bac
        </Link>
                <MenuList
                    menus={this.state.restaurant.menus}
                />
        </div>
        )
    }
}

export default RestaurantPage;