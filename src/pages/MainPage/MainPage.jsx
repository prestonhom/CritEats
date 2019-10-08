import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RestaurantList from '../../components/RestaurantList/RestaurantList'

const MainPage=()=>{
        return(
            <div>
            <RestaurantList />
            </div>
        )
}

export default MainPage;