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
            {this.state.restaurant.menus.map((m)=>{
            return(
                <div>
                <MenuList
                    name={m.name}
                    menuPhoto={<img src={m.menu_photo}></img>}
                    category={m.categories.map((s)=>{
                        return(
                            <div>
                                THIS IS name of {s.id},{s.name}
                            </div>
                        )
                    })}
                />
                </div>
                )
            })}
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