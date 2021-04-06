import { DELETE_PASSENGER, EDIT_PASSENGER, FIRST_PAGE, GET_PASSENGER } from "../Store/Events";

const initialstate = {
    passengerData: "",
    EditData:""
};

export default function ReducerFunctions(state = initialstate, action) {
    switch (action.type) {
        case GET_PASSENGER:
            return {
                ...state,
                passengerData: action.payload
            }
        case DELETE_PASSENGER:
            // console.log("Action Data ", action.payload);
            // console.log("State ", state);
            const delData = state.passengerData.data.filter((i) => { return !(i._id.includes(action.payload)) })
            return ({
                ...state,
                passengerData: { data: delData }
            })

        case EDIT_PASSENGER:
            const eData=state.passengerData.data.filter((i) => { return (i._id.includes(action.payload)) })
            return({
                ...state,
                EditData:{
                    state:{...state},
                    data:eData
                } 
            })
        default:
            return state;
    }
}
