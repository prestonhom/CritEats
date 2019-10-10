import React from 'react';

const Food=(props)=>{
    return(
        <div>
        {props.categories.map((s)=>{
            return(
                <div>
                    THIS IS name of {s.id},{s.name},
                    <img src={s.foods[0].food_photo}></img>
                    This is the description of the food{s.description}
                </div>
            )
        })}
        </div>
    )
}

export default Food