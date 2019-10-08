import React from 'react';

const RestaurantPage = (props)=>{
    const restaurant = props.restaurant(props.match.params.id)
    return(
        <div>
            RESTAURANT ID{restaurant.id}
            RESTAURANT NAME{restaurant.name}
        </div>
    )
}

export default RestaurantPage;