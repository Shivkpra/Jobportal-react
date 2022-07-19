import { createSlice } from "@reduxjs/toolkit";
import { initailState } from "./State";
import * as actions from "./Actions"


const jobPortalReducer = createSlice({
    name:'jobPortal',

    initialState:initailState,
    
    extraReducers:(builder)=>{
        builder.addCase(actions.LoginUser.fulfilled,(state,payload)=>{
            state.data = payload.payload.data
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
            console.log(payload.type)
            state.error = false
        })
        builder.addCase(actions.CompanyDetail.rejected,(state)=>{
            state.error = true
        })
        builder.addCase(actions.SignUp.fulfilled,(state)=>{
            state.signup = true
        })
        builder.addCase(actions.SignUp.rejected,(state)=>{
            state.error = true
        })
        builder.addCase(actions.Joblist.fulfilled,(state,payload)=>{
            state.joblist = payload.payload.data
            console.log(payload.type)
            state.error = false
        })
        builder.addCase(actions.Joblist.rejected,(state)=>{
            state.error = true
        })
        builder.addCase(actions.postjobs.fulfilled,(state, payload)=>{
            state.jobpost = payload.payload
            state.error = false
        })
        builder.addCase(actions.postjobs.rejected,(state)=>{
            state.error = true
        })
        builder.addCase(actions.comp_detail.fulfilled,(state,payload) =>{
            state.companyDetail = payload.payload.data
            state.error = false
        })
        builder.addCase(actions.comp_detail.rejected,(state)=>{
            state.error = true
        })
    }
})

export default jobPortalReducer.reducer