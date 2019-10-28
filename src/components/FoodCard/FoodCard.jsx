import React from 'react';
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import Reviews from '../Reviews/Reviews'


const FoodCard = (props) => {
    // const starRating=()=> {
    //     let starsArray = [];
    //     let count = 0;
    //     props.reviews.map((s) => {
    //         if (parseInt(props.id) === parseInt(s.food)) {
    //             console.log((s.stars))
    //             starsArray.push(s.stars)
    //         }
    //     })
    //     for (var i = 0; i < starsArray.length; i++) {
    //         count += starsArray[i]
    //     }
    //     return count / starsArray.length
    // }
    const starRating=()=> {
        let starsArray = [];
        let count = 0;
        props.reviews.map((s) => {
            if (parseInt(props.id) === parseInt(s.food)) {
                console.log((s.stars))
                starsArray.push(s.stars)
            }
        })
        const arrAvg = arr => arr.reduce((a,b) => a + b, 0) / arr.length
        return arrAvg(starsArray)
    }

    return (
        <Card style={{
            width: '18rem',
            margin: '2% 3%',
            height: '20rem',
            boxShadow: '1px 1px white'
        }} >
            <Card.Img
                variant="top"
                src={props.foodPhoto}
                style={{
                    'width': '100%',
                    'height': '10rem'
                }} />

            <Card.Body className='card-body' style={{
                backgroundColor: 'black',
                padding: 0,
                display: 'flex',
                flexDirection: 'column'
            }} >
                <Card.Title className='card-title'>{props.name}</Card.Title>
                <Card.Text className='card-text'>
                    stars:{starRating().toFixed(1)}/5
                    price:${props.price}
                </Card.Text>
                <Button
                    className='menu-button'
                    variant="link"
                    href={props.to}
                    style={{ margin: '.5rem' }}
                >
                    <Link
                        to={`/food/${props.id}/review`}
                    >
                        <span className='menu-word' style={{
                            backgroundColor: 'transparent'
                        }}>
                            Create Review
                </span>
                    </Link>
                </Button>
                <Button
                    className='menu-button'
                    variant="link"
                    href={props.to}
                    style={{ margin: '.5rem' }}
                >
                    <Link
                        to={`/food/${props.id}/reviews`}
                    >
                        <span className='menu-word' style={{
                            backgroundColor: 'transparent'
                        }}>
                            All Reviews
                </span>
                    </Link>
                </Button>
            </Card.Body>
        </Card>
    )
}

export default FoodCard;