import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { GET_API } from "../Store/Events";


// const FetchAPI = () =>{
//     const [state, setState] = useState([]);
//     const dispatch = useDispatch();
//     axios.get('https://jsonplaceholder.typicode.com/todos')
//     .then(res => { 
//         dispatch({payload:res.data})
//         setState(res.data) })
//     console.log("Api ",state);
//     return <><div></div></>
// }
// export default FetchAPI





// export const getDrivers = () => dispatch =>{
//     axios.get(`${ SERVER_URL }driv/driver-list-status/?status=all`, {headers: tokenHeaders})
//     .then(res=>{
//       dispatch({
//         type: GET_DRIVERS,
//         payload: res.data
//       });
//     })
//     .catch(err=>{
//       dispatch({
//         type: GET_DRIVERS,
//         payload: {
//           data: false,
//           err,
//         }
//       });
//     })
//   }