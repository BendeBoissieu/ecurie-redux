export const FETCH_HORSES = 'FETCH_HORSES';

export function fetchHorses(id) {
  const promise = fetch('https://wagon-garage-api.herokuapp.com/Mon-Ecurie/cars')
    .then(response => response.json());
  return {
    type: FETCH_HORSES,
    payload: promise
  }
}
