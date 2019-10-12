import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RestaurantList from '../../components/RestaurantList/RestaurantList'
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';



const MainPage=(props)=>{
        return(
            <div>
                <RestaurantList
                    restaurants={props.restaurants}
                    handleARestaurant={props.handleARestaurant}
                />
            </div>
        )
}

export default MainPage;