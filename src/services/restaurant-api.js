const BASE_URL= 'http://cors-anywhere.herokuapp.com/https://menunav.herokuapp.com/api/v1/'

export async function getRestaurants(){
    return fetch(BASE_URL, {mode: 'cors'})
    .then(res => res.json());
}
