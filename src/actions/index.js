export const FETCH_HORSES = 'FETCH_HORSES';
export const HORSE_CREATED = 'HORSE_CREATED';

export function fetchHorses(id) {
  const promise = fetch('https://wagon-garage-api.herokuapp.com/Mon-Ecurie/cars')
    .then(response => response.json());
  return {
    type: FETCH_HORSES,
    payload: promise
  }
}

export function createHorse(body, callback) {
  console.log(body);
  const request = fetch('https://wagon-garage-api.herokuapp.com/Mon-Ecurie/cars', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }).then(response => response.json())
  .then(callback);
  return {
    type: HORSE_CREATED,
    payload: request
}; }
