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
            state.loginError = false
        })
        builder.addCase(actions.LoginUser.rejected,(state)=>{
            state.loginError = true 
        })
        builder.addCase(actions.LogoutUser.fulfilled,(state,payload)=>{
            state.data = []
            state.logedIn = false 
            state.logout = true
            state.error = false
        })
        builder.addCase(actions.LogoutUser.rejected,(state)=>{
            state.error = true
        })
        builder.addCase(actions.CompanyDetail.fulfilled,(state,payload)=>{
            state.companyDetail = payload.payload
            state.error = false
        })
        builder.addCase(actions.CompanyDetail.rejected,(state)=>{
            state.error = true
        })
    }
})

export default jobPortalReducer.reducer