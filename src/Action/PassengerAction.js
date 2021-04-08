import axios from "axios"
import { bindActionCreators } from "redux";
import { DELETE_PASSENGER, EDIT_PASSENGER, GET_API, GET_PASSENGER, SEARCH_PASSENGER, UPDATE_PASSENGER } from "../Store/Events";

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

export const updateData = (state1, Id1, index1) => dispatch => {
  console.log("State from updateData Function ", state1, Id1, index1);
  dispatch({
    type: UPDATE_PASSENGER,
    payload: {
      state: state1,
      Id: Id1,
      index: index1
    },
  })
}

// export const searchData = (id) => dispatch => {
//   // console.log("Function from search ",id);
//   dispatch({
//     type:SEARCH_PASSENGER,
//     payload:id
//   })
//  }