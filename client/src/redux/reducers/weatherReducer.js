import { GET_CURRENT_LOCATION_WEATHER, GET_WEATHER } from "../actions/types";

const initialState = {
    currentLocationWeather:null
};
// eslint-disable-next-line
export default function (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case GET_CURRENT_LOCATION_WEATHER:
            return {...state, 
                currentLocationWeather: payload}
        case GET_WEATHER:
            return state.filter(alert => alert.id !== payload);
        default:
            return state;
    }
}