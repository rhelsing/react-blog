import { FETCH_POSTS, CREATE_POST, FETCH_POST, DELETE_POST } from '../actions' //index not needed?
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
    const {payload: {data}} = action //rip (destructure) data out
    return  {...state, [data.id]: data}//perk of obj as state
  case CREATE_POST:
    return 'ok'
  case DELETE_POST:
    //OLD WAY
    // const newState = {...state}
    // newState[action.payload.data] = null
    return _.omit(state, action.payload.data)
    return newState
  default:
    return state
  }
}

