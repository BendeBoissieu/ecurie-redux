import { FETCH_HORSES } from '../actions';
export default function (state = [], action) {
  switch(action.type){
    case FETCH_HORSES:
    return action.payload;
    default:
      return state;
  }
}
