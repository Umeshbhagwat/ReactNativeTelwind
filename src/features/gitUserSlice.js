import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const getAllData=createAsyncThunk("getUser",async()=>
{
    const responce=await fetch('https://api.github.com/users');
    const result=responce.json();
    return result;
})

export const gitUser = createSlice({
    name:"gitUser",
    initialState:{
      user:[],
      loading:false,
      error:false
    },
   extraReducers:{
    [getAllData.pending]:(state)=>{
        state.loading=true;
    },
    [getAllData.fulfilled]:(state,action)=>{
        state.loading=false;
        state.user=action.payload;
    },
    [getAllData.rejected]:(state,action)=>{
        state.loading=false;
        state.error=action.payload;
    },
   }
})
export default gitUser.reducer