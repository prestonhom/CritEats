import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RestaurantList from '../../components/RestaurantList/RestaurantList'

const MainPage=(props)=>{
        return(
            <div>
            <RestaurantList 
                restaurants={props.restaurants}
            />
            </div>
        )
}

export default MainPage;