import {configureStore} from '@reduxjs/toolkit';
import weatherSlice from "./weather-slice";
import navbarSlice from "./navbar-slice";
import dogsSlice from "./dogs-slice";
import contactSlice from "./contact-slice";

const store = configureStore({
    reducer: {
        weather: weatherSlice,
        navbar: navbarSlice,
        dogs: dogsSlice,
        contact: contactSlice
    }
})

export default store;