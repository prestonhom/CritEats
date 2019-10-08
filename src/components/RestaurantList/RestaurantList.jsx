import React, {Component} from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import RestaurantPage from '../RestaurantPage/RestaurantPage'

const RestaurantList=(props)=>{
        return(
            <div>    
            {props.restaurants.map((s,idx)=>{
               return(
                <Link
                to={`/restaurants/${idx}`}
                key={idx}
                >
                {s.name}

                </Link>
            
               )              
            })}
           </div>   
        )  
}
export default RestaurantList;