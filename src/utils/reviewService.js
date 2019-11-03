import userService from './userService';
const BASE_URL="/api/food/"

export async function getReviews(review){
    return fetch(`${BASE_URL}${review.food}/reviews`)
    .then((res) => res.json())
}

export async function createReview(review){
    if (!userService.getUser()) return
    return fetch(`${BASE_URL}${review.food}/review`, {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(review)
    })
    .then((res) => res.json())
}