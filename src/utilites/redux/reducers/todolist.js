import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  datas: null,
};

const todoSlice = createSlice({
    name:"todos",
  initialState,
  reducers: {
    store(state,action){
        state.datas=action.payload;
    },
  },
});

export default todoSlice.reducer;
export const {store}= todoSlice.actions;