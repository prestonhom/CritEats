import userService from './userService';
const BASE_URL = "/api/food/"

export async function getReviews(review) {
    return fetch(`${BASE_URL}${review.food}/reviews`)
        .then((res) => res.json())
}

export async function createReview(review) {
    if (!userService.getUser()) return
    return fetch(`${BASE_URL}${review.food}/review`, {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(review)
    })
        .then((res) => res.json())
}

export async function getReview(food,idx) {
    if (!userService.getUser()) return;
    return fetch(`${BASE_URL}${food}/reviews/${idx}`)
    .then(res => {
      if (res.ok) return res.json();
      throw new Error('Error getting review!');
    });
  }

export async function deleteReview(review) {
    if (!userService.getUser()) return;
    return fetch(`${BASE_URL}${review.food}/reviews/${review.id}`, { method: 'DELETE' })
        .then(res => {
            if (res.ok) return res.json();
            throw new Error('Error deleting review!');
        });
}

export function updateReview(food,idx, inputs) {
    if (!userService.getUser()) return;
    return fetch(`${BASE_URL}${food}/reviews/${idx}/edit`, {
      method: 'PUT',
      headers: new Headers({'Content-Type': 'application/json'}),
      body: JSON.stringify(inputs)
    })
    .then(res => {
      if (res.ok) return res.json();
      throw new Error('Error updating review!');
    });
  }