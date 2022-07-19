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
    }).catch(err=>console.log(err))
    return response.data
})

export const SignUp = createAsyncThunk('registe/user',async(data)=>{
    const {email, full_name, role} = data 
    const response = await axios({
        method:'post',
        url:url.REGISTER,
        headers:{
            "content-type": "application/json"
        },
        data:{
            "email":email,
            "full_name":full_name,
            "role":role
        }
    }).catch(err=>console.log(err))
    return response.data
})


export const Joblist = createAsyncThunk('talent/joblist', async(access) => {
    const response = await axios({
        method: 'GET',
        url: url.JOB_LIST,
        headers:{
            "Authorization":`Bearer ${access}`,
        }
    }).catch(err=>console.log(err))
    return response.data
})

export const postjobs = createAsyncThunk('company/jobpost', async(data)=>{
    const{job_title,
            job_description,
            job_type,
            job_openings,
            salary_range,
            job_location,
            company,
            access,} = data
            console.log(data)
    const response = await axios({
        method: 'post',
        url: url.JOB_POST,
        headers: {
            "Authorization":`Bearer ${access}`,
            "content-type": "application/json"
        },
        data :{
            "company": `${company}`,
            "job_title" : `${job_title}`,
            "job_description" : `${job_description}`,
            "job_type" : `${job_type}`,
            "job_openings" : `${job_openings}`,
            "job_salary_range": `${salary_range}`,
            "job_location":`${job_location}`,
        }

    }).catch(err => console.log(err));
    return response.data;
})

export const comp_detail = createAsyncThunk ('company/comp_detail', async(access)=>{
    const response = await axios({
        method: 'get',
        url: url.SHOW_COMP_DETAIL,
        headers:{
            "Authorization":`Bearer ${access}`,
        }

    }).catch(err => console.log(err));
    return response.data;
})