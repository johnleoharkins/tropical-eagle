import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    location: {
        lat: -88.9573,
        lon: 43.1178,
        name: "Lake Mills"
    },
    current: {
        temp: 44.51,
        temp_min: 42.87,
        temp_max: 46.45,
        description: "broken clouds",
    },
    wind: {
        speed: 5.75,
        deg: 250
    }
}

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        locationUpdated(state, action) {

        },
        currentUpdated(state, action) {

        }
    }
})


export const { locationUpdated, currentUpdated } = weatherSlice.actions;
export default weatherSlice.reducer;