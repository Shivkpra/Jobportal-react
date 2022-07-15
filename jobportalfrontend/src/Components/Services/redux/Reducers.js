import { createSlice } from "@reduxjs/toolkit";
import { initailState } from "./State";
import * as actions from "./Actions"


const jobPortalReducer = createSlice({
    name:'jobPortal',
    initialState:initailState,
    extraReducers:(builder)=>{
        builder.addCase(actions.LoginUser.fulfilled,(state,payload)=>{
            state.data = payload.payload
            state.logedIn = true
            state.logout = false
        })
        builder.addCase(actions.LogoutUser.fulfilled,(state,payload)=>{
            state.data = []
            state.logedIn = false 
            state.logout = true
        })
    }
})

export default jobPortalReducer.reducer