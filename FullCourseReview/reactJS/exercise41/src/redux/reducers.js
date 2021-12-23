import dataState from "./state";

const reducers = (state = dataState, action) => {
    switch (action.type) {
        case "SET_NEW_DATA":
            return {
                ...state,
                data: action.payload,
            };
        default:
            return state;
    }
}

export default reducers;