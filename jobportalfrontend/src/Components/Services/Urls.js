import env from "react-dotenv";

const url = process.env.REACT_APP_BACKEND_URL

// for user accout related urls

export const REGISTER = `${url}/user/register`
export const LOGIN = `${url}/user/login`
export const LOGOUT = `${url}/user/logout`
export const FORGOT_PASSWORD = `${url}/user/forgotpassword`
export const RESET_PASSWORD = `${url}/user/register`
export const ACCESS_TOKEN = `${url}/user/token_refresh`
export const DELETE_USER = `${url}/user/delete`

// for talent related urls 

export const SHOW_SAVED_JOBS = `${url}/talent/bookmarkedjobs`
export const APPLY_JOB = `${url}/talent/applyjob`
export const SAVE_JOB = `${url}/talent/bookmarkjob`
export const TALENT_PROFILE = `${url}/talent/detailform`
export const JOB_LIST = `${url}/talent/joblist`
export const DELETE_SAVED_JOB = `${url}/talent/deletebookmarkedjob/`
export const JOB_DETAIL = `${url}/talent/jobdetails/`
export const UPDATE_TALENT_PROFILE = `${url}/talent/update/`
export const FILTER_JOB = `${url}/talent/jobsearch/`

// For company related urls

export const COMPANY_PROFILE = `${url}/company/detailform`
export const JOB_POST = `${url}/company/jobpost`
export const COMPANY_JOB_LIST = `${url}/company/joblist/`
export const GET_TALENT_PROFILE = `${url}/company/talentdetail/`
export const UPDATE_COMPANY_PROFILE = `${url}/company/update/`
export const UPDATE_JOB_POST = `${url}/company/job/update/`
export const DELETE_POSTED_JOB = `${url}/company/job/delete/`
export const SAVE_TALENT = `${url}/company/bookmarktalent`
export const DELETE_SAVED_TALENT = `${url}/company/deleteBookMarkedTalent/`
export const SHOW_SAVED_TALENT = `${url}/company/showsbookmarked`