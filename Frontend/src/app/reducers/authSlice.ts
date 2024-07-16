import type {PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { LoginResponse } from "../types/Login";
import { RootState } from "../store";


const initialState : LoginResponse ={
    userId:null
}


export const authSlice = createSlice ({
    name : "auth",
    initialState,
    reducers:{
        setUser: (state,action:PayloadAction<LoginResponse>) =>{
        
        localStorage.setItem(
            "userInfo",
            JSON.stringify({

                userId : action.payload.userId
            })
        )
      
     state.userId = action.payload.userId

        }
    }
})


export const { setUser } = authSlice.actions;
export default authSlice.reducer;