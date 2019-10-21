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
                    console.log(this.state.reviews[0])
                    return(
                        <div
                        style={{color:'red'}}
                        >
                            {s.id}
                            {s.food}
                            {s.stars}
                            {s.description}
                        </div>
                    )
                })}
                
            </div>
        )
    }
}

export default Reviews;