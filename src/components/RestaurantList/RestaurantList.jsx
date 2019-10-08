import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link, Route, Switch} from 'react-router-dom';
import RestaurantPage from '../../pages/RestaurantPage/RestaurantPage'

const RestaurantList=(props)=>{
      return(
            <div>    
            {props.restaurants.map((s,idx)=>{
               return(
                  <Link
                  to={`/restaurants/${idx}`}
                  key={idx}
                  name={s.name}
                  onClick={() => props.handleARestaurant(idx)}
                  > 
                  {s.name}
                  <img style={{
                     'width':'50px',
                     'height':'50px'
                  }}
                  src={s.restaurant_photo}
                  />
                  </Link>
               )              
            })}
         </div>   
   )  
}
export default RestaurantList;