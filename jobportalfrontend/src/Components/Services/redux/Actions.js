import * as url from '../Urls'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// for user necessary actions

export const LoginUser = createAsyncThunk('user/login',async(login)=>{
    const {email,password} = login
    const response = await axios({
        method : "post",
        url : url.LOGIN,
        data : {"email":email,"password":password}
    }).then(res=>{
        return res.data
    }).catch(err=>console.log(err))
    return response.data
})

export const LogoutUser = createAsyncThunk('user/logout',async(tokens)=>{
    const {access,refresh} = tokens
    const response = await axios({
        method:"post",
        url: url.LOGOUT,
        headers:{
            "Authorization":`Bearer ${access}`
        },
        data:{"refresh":refresh}
    }).catch(err=>console.log(err))
    console.log(access,refresh)
    return response.data
})