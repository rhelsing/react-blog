import { FETCH_POSTS, CREATE_POST, FETCH_POST } from '../actions' //index not needed?
import _ from 'lodash';

export default function(state = {}, action) {
  switch (action.type) {
  case FETCH_POSTS:
    //transform action response into something readable by components
    //{id: {obj}, id2: {obj2}}
    return _.mapKeys(action.payload.data, 'id')
  case FETCH_POST:
    //OLD WAY:
    // const post = action.payload.data
    // const newState = {...state}
    // newState[post.id] = post
    // return newState
    //NEW WAY:
    const {payload: {data}} = action //rip data out
    return  {...state, [data.id]: data}
  case CREATE_POST:
    return 'ok'
  default:
    return state
  }
}

