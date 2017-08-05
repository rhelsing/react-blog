import axios from 'axios'

export const FETCH_POSTS = 'FETCH_POSTS'
export const FETCH_POST = 'FETCH_POST'
export const CREATE_POST = 'CREATE_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const DELETE_POST = 'CREATE_POST'

const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=sdjdfsgjdsf'

export function fetchPosts(){
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)
  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function createPost(values, callback){
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
  .then(() => callback()) //values from form.. json as second param + callback as promise
  //not doing anything with this.. but could load into our state without making another index request
  return {
    type: CREATE_POST,
    payload: request
  }
}

export function updatePost(id, values, callback){

  //not supported, create new and delete old
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
  .then(() => axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`))
  .then(() => callback())
  return {
    type: UPDATE_POST,
    payload: request
  }
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`)
  return {
    type: FETCH_POST,
    payload: request
  }
}

export function deletePost(id, callback) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
  .then(() => callback())
  return {
    type: DELETE_POST,
    payload: request.id
  }
}
