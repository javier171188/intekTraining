import dataState from "./state";


const chatAreaReducer = (state = dataState, action) => {
    switch (action.type) {
        case "SET_NEW_DATA":

            return {
                ...state,
                currentUserChat: action.payload,
            };
        default:
            return state;
    }
}

export default chatAreaReducer;