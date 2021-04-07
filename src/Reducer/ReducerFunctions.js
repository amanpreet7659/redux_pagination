import { DELETE_PASSENGER, EDIT_PASSENGER, FIRST_PAGE, GET_PASSENGER, UPDATE_PASSENGER } from "../Store/Events";

const initialstate = {
    passengerData: "",
    EditData:"",UData:""
};

export default function ReducerFunctions(state = initialstate, action) {
    switch (action.type) {
        case GET_PASSENGER:
            return {
                ...state,
                passengerData: action.payload,
                pageD:action.payload.totalPages
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
            console.log("eData ",eData);
            return({
                ...state,
                EditData:{
                    data:eData
                } 
            })
        case UPDATE_PASSENGER :
            {
                const UpData=state.passengerData.data.filter((i) => { return (i._id.includes(action.payload.UData.Id))})
                state.passengerData.data[action.payload.UData.index].name=action.payload.UData.state.name
                return({...state,UData:UpData})
            }
        default:
            return state;
    }
}
