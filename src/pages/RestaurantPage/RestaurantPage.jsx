import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import MenuList from '../../components/MenuList/MenuList'
import MenuPage from '../MenuPage/MenuPage'
import './RestaurantPage.css';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard'
import RestaurantDetailCard from '../../components/MenuCard/MenuCard'

class RestaurantPage extends Component{
    state = {
        restaurant: this.props.restaurants(this.props.match.params.id),
    }
    render(){
        return(
        <div>
        <h1 style={{
                  textAlign:'center',
                  fontFamily: 'Monoton, cursive',
                  textShadow:'1px 1px',
                  color:'pink'

               }}>
                  M &nbsp; E &nbsp; N &nbsp; U
            </h1>
            
            <form className='form' style={{
               margin:'0 0 0 2rem'
            }}>
      
               <input type='text'className='rightArrow' placeholder='SEARCH'></input>
            </form>

            <MenuList
                
                menus={this.state.restaurant.menus}
            />
        </div>
        )
    }
}

export default RestaurantPage;