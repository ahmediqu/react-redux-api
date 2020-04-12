import { GET_CATS, GET_CATS_ERROR } from "../actions/types";

const initialState = {
    cat : null,
    cats: [],
    repos: [],
    loading: true,
    error: {}
}

export default function( state=initialState, action){
    const {type , payload } = action;
    switch(type){
        case GET_CATS:
            return {
                ...state,
                cat: payload,
                loading: false
            }
        case GET_CATS_ERROR:
            return {
                ...state,
                error: payload,
                loading: false 
            }
        default:
            return state;
    }
}