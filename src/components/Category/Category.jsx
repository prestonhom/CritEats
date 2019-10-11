import React from 'react';
import Food from '../Food/Food';
import './Category.css';
const Category=(props)=>{
    return(
        <div>
        
        {props.categories.map((s)=>{
            return(
                <div>
                    
                    THIS IS name of {s.id},{s.name},
                   <Food 
                    category_id={s.foods}
                   />
                </div>
            )
        })}
        </div>
    )
}

export default Category;