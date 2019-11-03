import React, { Component } from 'react';
import MenuList from '../../components/MenuList/MenuList'
import './RestaurantPage.css';


class RestaurantPage extends Component {
    state = {
        restaurant: this.props.restaurants(this.props.match.params.id),
    }

    render() {
        return (
            <div>
                <h1 style={{
                    textAlign: 'center',
                    fontFamily: 'Monoton, cursive',
                    textShadow: '1px 1px',
                    color: 'pink'
                }}>
                    M &nbsp; E &nbsp; N &nbsp; U
            </h1>
            

                <p style={{ margin: '3rem', fontSize: '30px', fontStyle: 'italic', textAlign: 'center' }}>
                    {this.state.restaurant.description}
                </p>
                <MenuList
                    menus={this.state.restaurant.menus}
                    reviews={this.props.reviews}
                />
            </div>
        )
    }
}

export default RestaurantPage;