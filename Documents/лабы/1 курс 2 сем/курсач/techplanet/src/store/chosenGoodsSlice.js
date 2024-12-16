import { createSlice } from "@reduxjs/toolkit";

const chosenGoodsSlice=createSlice({
    name: "chosenGoods",
    initialState: {
        chosenGoods:[]
    },
    reducers: {
        reloadGoods(state, action){
            return {...state, chosenGoods: action.payload};
        }
    }
});

export const {reloadGoods}=chosenGoodsSlice.actions;

export default chosenGoodsSlice.reducer;


// import { createSlice } from "@reduxjs/toolkit";
// import { Map, fromJS, List } from "immutable";

// const chosenGoodsSlice = createSlice({
//   name: "chosenGoods",
//   initialState: Map({
//     chosenGoods: List(),
//   }),
//   reducers: {
//     reloadGoods(state, action) {
//       return state.set("chosenGoods", fromJS(action.payload));
//     },
//   },
// });

// export const { reloadGoods } = chosenGoodsSlice.actions;
// export default chosenGoodsSlice.reducer;