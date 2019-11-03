const BASE_URL = 'https://menunav.herokuapp.com/api/v1/'

export async function getRestaurants() {
    let results = await fetch(BASE_URL, { mode: 'cors' })
        .then(res => res.json());
    return results
}
