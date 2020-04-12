export const FETCH_HORSES = 'FETCH_HORSES';

const horses = [
    { id: 1, name: 'Flemme', breed: 'Arabe', owner: 'John', age: '4' },
    { id: 2, name: 'Gris poil', breed: 'Selle Francais', owner: 'Paul', age: '8' },
    { id: 3, name: 'Sprint', breed: 'Perceron', owner: 'James', age: '14' },
    { id: 4, name: 'Eclair', breed: 'Andalouse', owner: 'George', age: '10' }
  ]

export function fetchHorses(){
  return {
    type: 'FETCH_HORSES',
    payload: horses
  }
}
