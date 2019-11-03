import React from 'react';
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'



const FoodCard = (props) => {
    const starRating = () => {
        let starsArray = [];
        props.reviews.map((s) => {
            if (parseInt(props.id) === parseInt(s.food)) {
                starsArray.push(s.stars)
            }
        })
        const arrAvg = arr => arr.reduce((a, b) => a + b, 0) / arr.length
        let result = arrAvg(starsArray)
        result = parseInt(result)
        return Math.round(result)
    }

    const handleStarRatings = (numberOfStars) => {
        if (numberOfStars !== 1 && numberOfStars !== 2 && numberOfStars !== 3 &&
            numberOfStars !== 4 && numberOfStars !== 5) {
            return 'No Stars Yet'
        }
        else {
            numberOfStars = parseInt(numberOfStars)
            let shootingStar = <img style={{ width: '25px', height: '25px' }} src='https://image.flaticon.com/icons/svg/616/616489.svg' />;
            if (numberOfStars === 1) {
                return [shootingStar]
            }
            if (numberOfStars === 2) {
                return [shootingStar, shootingStar]
            }
            if (numberOfStars === 3) {
                return [shootingStar, shootingStar, shootingStar]
            }
            if (numberOfStars === 4) {
                return [shootingStar, shootingStar, shootingStar, shootingStar]
            }
            if (numberOfStars === 5) {
                return [shootingStar, shootingStar, shootingStar, shootingStar, shootingStar]
            }
        }

    }
    let thisArray = handleStarRatings(starRating())
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
                flexDirection: 'column',

            }} >
                <Card.Title className='card-title'>{props.name} | &nbsp; ${props.price}</Card.Title>
                <Card.Text className='card-text'>

                    {thisArray} 
                    

                </Card.Text>
                <Button
                    className='menu-button'
                    variant="link"
                    href={props.to}
                    style={{ margin: '.3rem' }}
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
                    style={{ margin: '.3rem' }}
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