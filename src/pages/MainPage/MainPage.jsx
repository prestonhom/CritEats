import React from 'react';
import RestaurantList from '../../components/RestaurantList/RestaurantList'



const MainPage=(props)=>{
        return(
            <div>
                <RestaurantList
                    search={props.search}
                    updateSearch={props.updateSearch}
                    restaurants={props.restaurants}
                    handleARestaurant={props.handleARestaurant}
                />
            </div>
        )
}

export default MainPage;