import type {PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { LoginResponse } from "../types/Login";



const initialState : LoginResponse ={
    userId:null,
    role:null
}


export const authSlice = createSlice ({
    name : "auth",
    initialState,
    reducers:{
        setUser: (state,action:PayloadAction<LoginResponse>) =>{
        
        localStorage.setItem(
            "userInfo",
            JSON.stringify({

                userId : action.payload.userId,
                role:action.payload.role
            })
        )
      
     state.userId = action.payload.userId
     state.role = action.payload.role
        },
        logout: (state) => {
            state.userId = null;
            state.role = null; 
            localStorage.clear();
          },
    }
})


export const { setUser,logout } = authSlice.actions;
export default authSlice.reducer;