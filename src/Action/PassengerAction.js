import axios from "axios"
import { DELETE_PASSENGER, EDIT_PASSENGER, GET_API, GET_PASSENGER, UPDATE_PASSENGER } from "../Store/Events";

export const fetchApi = (index) => dispatch => {
  // debugger
  axios.get(`https://api.instantwebtools.net/v1/passenger?page=${index}&size=20`)
    .then(res => {
      dispatch(
        {
          type: GET_PASSENGER,
          payload: res.data
        }
      )
    })
    .catch(err => {
      dispatch(
        {
          type: GET_PASSENGER,
          payload:
          {
            data: false,
            err
          }
        })
    })
}
export const delt = (id) => dispatch => {
  dispatch({
    type: DELETE_PASSENGER,
    payload: id
  })
}
export const editData = (id) => dispatch => {
  console.log("from edit ", id);
  dispatch({
    type: EDIT_PASSENGER,
    payload: id
  })
}

export const updateData = (state, Id,index) => dispatch => {
  console.log("State from updateData Function ", state, Id);
  dispatch({
    type: UPDATE_PASSENGER,
    payload: { state: state, Id: Id ,index:index},
  })
}