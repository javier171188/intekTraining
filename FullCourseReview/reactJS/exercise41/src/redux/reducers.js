import dataState from "./state";
import { SET_NEW_DATA } from "./types";

const reducers = (state = dataState, action) => {
    switch (action.type) {
        case SET_NEW_DATA:
            return {
                ...state,
                data: action.payload,
            };
        default:
            return state;
    }
}

export default reducers;