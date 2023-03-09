import {configureStore} from '@reduxjs/toolkit';
import weatherSlice from "./weather-slice";
import navbarSlice from "./navbar-slice";
import dogsSlice from "./dogs-slice";

const store = configureStore({
    reducer: {
        weather: weatherSlice,
        navbar: navbarSlice,
        dogs: dogsSlice
    }
})

export default store;