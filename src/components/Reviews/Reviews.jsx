import React, {Component} from 'react';
import {getReviews} from '../../utils/reviewService'

class Reviews extends Component{
    state={
        reviews:[]
    }

    async componentDidMount(){
        let reviews = await getReviews({food:this.props.id})
        this.setState({
            reviews:reviews
        })
    }

    render(){
        return(
            <div>
                {this.state.reviews.map((s)=>{
                    if(this.props.id === parseInt(s.food))
                    return(
                        <div
                        style={{color:'red'}}
                        >
                            {s.id}
                            {s.food}
                            {s.stars}
                            {s.description}
                            {s.userName}
                        </div>
                    )
                })}
                
            </div>
        )
    }
}

export default Reviews;