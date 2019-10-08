import React from 'react';

const Restaurant = (props)=>{
    const restaurant = props.result(props.match.params.id)
    return(
        <div>
            RESTAURANT ID{restaurant.id}
            RESTAURANT NAME{restaurant.name}
        </div>
    )
}

export default Restaurant;