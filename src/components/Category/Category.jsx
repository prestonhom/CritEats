import React from 'react';
import Food from '../Food/Food';
import './Category.css';
const Category=(props)=>{
    return(
        <div>
        
        {props.categories.map((s)=>{
            return(
                <div>
                    <span style={{color:'pink'}}>{s.name.toUpperCase()}
                    </span>
                   <Food 
                    category_foods={s.foods}
                    reviews={props.reviews}
                   />
                </div>
            )
        })}
        </div>
    )
}

export default Category;