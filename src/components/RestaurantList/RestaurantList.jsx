import React, {Component} from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import RestaurantPage from '../../pages/RestaurantPage/RestaurantPage'

const RestaurantList=(props)=>{
      return(
            <div>    
            {props.restaurants.map((s,id)=>{
               return(
                  <Link
                  to={`/restaurants/${id}`}
                  key={id}
                  name={s.name}
                  > 
                  {s.name}
                  </Link>
               )              
            })}
         </div>   
   )  
}
export default RestaurantList;