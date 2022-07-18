import * as url from '../Urls'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { useSelector } from 'react-redux'

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
    console.log(response.data)
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

export const CompanyDetail = createAsyncThunk('company/detail',async(data)=>{
    // const access = useSelector(state=>state.jobportal.data.access)
    // const user = useSelector(state=>state.jobportal.data.id)
    const {
        company_name,
        phone_no,
        address,
        domain,
        description,
        employee_count,
        user,
        access} = data
        console.log(domain)
        console.log(data)
    const response = await axios({
        method : "post",
        url : url.COMPANY_PROFILE,
        headers:{
            "Authorization":`Bearer ${access}`,
            "content-type": "application/json"
        },
        data :{
            "company_name": `${company_name}`,
            "phone_no": `${phone_no}`,
            "address": `${address}`,
            "domain": `${domain}`,
            "description": `${description}`,
            "user": user,
            "employee_count" : employee_count
        }
    }).then(res=>console.log(res.data)).catch(err=>console.log(err))
    return response.data
})

// address: Array(1)
// 0: "This field is required."
// length: 1
// [[Prototype]]: Array(0)
// company_name: ['This field is required.']
// description: ['This field is required.']
// domain: ['This field is required.']
// phone_no: ['This field is required.']