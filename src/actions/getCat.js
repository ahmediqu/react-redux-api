import axios from 'axios';
import {
    GET_CATS,
    GET_CATS_ERROR
} from './types';

export const getGets = () => async despatch => {
    try {
        const res = await axios.get('https://­breedscat.herokuapp.c­om/api/v1/breeds');

        despatch({
            type: GET_CATS,
            payload: res.data
        });
    } catch (err) {
        despatch({
            type: GET_CATS_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}