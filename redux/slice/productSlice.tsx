import {createSlice} from "@reduxjs/toolkit";


const initialState={
    products:[],
}
const productSlice=createSlice({
    name:'flower',
    initialState,
    reducers:{
        STORE_FLOWERS(state,action){
            state.products=action.payload.products
        }
    }
})

export const {STORE_FLOWERS}=productSlice.actions
export const selectFlowers =(state)=>state.flower.products

export default productSlice.reducer