import { DELETE_PASSENGER, EDIT_PASSENGER, FIRST_PAGE, GET_PASSENGER, SEARCH_PASSENGER, UPDATE_PASSENGER } from "../Store/Events";

const initialstate = {
    passengerData: "",
    EditData: "",
    UData: "",
    SearchData:""
};

export default function ReducerFunctions(state = initialstate, action) {
    switch (action.type) {
        case GET_PASSENGER:
            return {
                ...state,
                passengerData: action.payload,
                pageD: action.payload.totalPages
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
            const eData = state.passengerData.data.filter((i) => { return (i._id.includes(action.payload)) })
            // console.log("eData ", eData);
            return ({
                ...state,
                EditData: {
                    data: eData
                }
            })
        case UPDATE_PASSENGER:
            {
                const eData0 = state.passengerData.data.filter((i) => { return (i._id.includes(action.payload.Id)) })

                { action.payload.state.name === "" ? state.passengerData.data[action.payload.index].name = state.passengerData.data[action.payload.index].name : state.passengerData.data[action.payload.index].name = action.payload.state.name }
                { action.payload.state.trips === "" ? state.passengerData.data[action.payload.index].trips = state.passengerData.data[action.payload.index].trips : state.passengerData.data[action.payload.index].trips = action.payload.state.trips }
                { action.payload.state.country === "" ? state.passengerData.data[action.payload.index].airline.country = state.passengerData.data[action.payload.index].airline.country : state.passengerData.data[action.payload.index].airline.country = action.payload.state.country }
                { action.payload.state.airline_name === "" ? state.passengerData.data[action.payload.index].airline.name = state.passengerData.data[action.payload.index].airline.name : state.passengerData.data[action.payload.index].airline.name = action.payload.state.airline_name }

                // console.log("eData",state.passengerData.data[action.payload.index].name);
                return ({
                    ...state,
                    UData: eData0
                })
            }
        // case SEARCH_PASSENGER:
        //     {
        //         // const lower=
        //         const sdata = state.passengerData.data.filter((i) => { return (i.name.toLowercase().includes(action.payload)) })
        //         console.log("Search is ", sdata);

        //         return ({
        //             ...state,
        //             SearchData:sdata
        //         })
        //     }
        default:
            return state;
    }
}
