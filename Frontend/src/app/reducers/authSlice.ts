import type {PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { LoginResponse } from "../types/Login";
import { RootState } from "../store";


const initialState : LoginResponse ={
    refreshToken: null,
    accessToken: null,
    accessTokenUpdatedAt : null
}


export const authSlice = createSlice ({
    name : "auth",
    initialState,
    reducers:{
        setUser: (state,action:PayloadAction<LoginResponse>) =>{
        
        localStorage.setItem(
            "userInfo",
            JSON.stringify({
                refreshToken:action.payload.refreshToken,
                accessToken : action.payload.accessToken,
                accessTokenUpdatedAt : action.payload.accessTokenUpdatedAt
            })
        )
        state.refreshToken = action.payload.refreshToken
        state.accessToken  = action.payload.accessToken
        state.accessTokenUpdatedAt = action.payload.accessTokenUpdatedAt

        }
    }
})


export const { setUser } = authSlice.actions;
export default authSlice.reducer;