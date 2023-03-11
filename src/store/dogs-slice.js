import {createSlice} from "@reduxjs/toolkit";
import {DOG_DATA} from "../data/dogs/DOG_DATA";

const initialState = {
    categories: ['toys', 'collars', 'leashes', 'supplies',
        'furniture', 'health', 'treats', 'food', 'training'],
    activeCategories: [],
    products: JSON.parse(JSON.stringify(DOG_DATA))
}

const dogSlice = createSlice({
    name: 'dogs',
    initialState,
    reducers: {
        categoryActivated(state, action){
            console.log(action.payload)
            // state.activeCategories = [...state.activeCategories, action.payload]
            state.activeCategories = [...state.activeCategories, action.payload];

        },
        categoryDeactivated(state, action){
            const index = state.activeCategories.indexOf(action.payload)
            state.activeCategories.splice(index, 1)
        }
    }
})

export const DogsActions = dogSlice.actions;
export default dogSlice.reducer;