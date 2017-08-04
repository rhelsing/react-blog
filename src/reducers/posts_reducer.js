import { FETCH_POSTS, CREATE_POST } from '../actions' //index not needed?
import _ from 'lodash';

export default function(state = {}, action) {
  switch (action.type) {
  case FETCH_POSTS:
    //transform action response into something readable by components
    //{id: {obj}, id2: {obj2}}
    return _.mapKeys(action.payload.data, 'id')
  case CREATE_POST:
    return 'ok'
  default:
    return state
  }
}

