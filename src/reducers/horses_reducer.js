import { FETCH_HORSES, FETCH_HORSE, REMOVE_HORSE} from '../actions';
export default function (state = [], action) {
  switch(action.type){
    case FETCH_HORSES:
    return action.payload;
    case FETCH_HORSE:
    return [ action.payload ];
    case REMOVE_HORSE:
      return state.filter((horse) => horse !== action.payload);
    default:
      return state;
  }
}
