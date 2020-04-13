import { FETCH_HORSES, HORSE_CREATED, FETCH_HORSE } from '../actions';
export default function (state = [], action) {
  switch(action.type){
    case FETCH_HORSES:
    return action.payload;
    case FETCH_HORSE:
    return [ action.payload ];
    default:
      return state;
  }
}
