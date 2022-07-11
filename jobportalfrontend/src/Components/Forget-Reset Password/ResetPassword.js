import React, { useState } from 'react'
import './ResetPasswordCss.css'
import './ForgetPasswordCss.css'

function ResetPassword() {
    const[checkbox,setCheckBox] = useState(false)
    const[showPassword,setShowPassword] = useState("password")
    const[password,setPassword] = useState('')
    const[password2,setPassword2] = useState('')
    const sumbitHandler = (e)=>{
        e.preventDefault()
        if(password===password2){
            console.log("match")
        }
        else{
            console.log("password doesnt match")
            setPassword('')
            setPassword2('')
        }

    }
    const checkBoxHandler = (e)=>{
        e.preventDefault()
        if(checkbox){
            setCheckBox(false)
            setShowPassword("password")
        }
        else{
            setCheckBox(true)
            setShowPassword("text")
        }
    }
    return (
        <>
        <div className='reset-outer-div'>
            <div>
            <form class="form-inline" onSubmit={(e)=>{
                sumbitHandler(e)
            }}>
                <div class="form-group mx-sm-3 mb-2">
                <label>Password</label>
                    <input type={showPassword} class="form-control" id="inputPassword2" value={password} placeholder="Enter Password" onChange={(e)=>{
                        setPassword(e.target.value)
                        console.log(password)
                    }}/>
                </div>
                <div class="form-group mx-sm-3 mb-2">
                <label>Re-Enter Password</label>
                    <input type={showPassword} class="form-control" id="inputPassword2" value={password2} placeholder="Re-Enter Password" onChange={(e)=>{
                        setPassword2(e.target.value)
                    }}/>
                </div>
            <div>
            <label>Show Password</label>
            <input type="checkbox" onChange={(e)=>{
                checkBoxHandler(e)
                // console.log(e.target.value)
            }}/>
            </div>
                <button type="submit" class="btn btn-primary mb-2">Confirm identity</button>
            </form>
            </div>
            <div className='outer-outer-div'>
            <h3 id='outer-heading'>Reset Password Form</h3>
            <div className='outer-div'>
                <div className='inner-div'>
                    <h3 style={{"color":"#0085e2"}}>
                        Forgot Password
                    <img className='mx-2' src="https://img.icons8.com/ios-glyphs/30/000000/lock--v1.png"/>
                    </h3>
                    <p className='my-4'>Seems like you want to forgot your password. <span style={{"color":"#0085e2"}}> Click Below Button </span>
                    </p>
                    <div className='my-3'>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                    <button className='btn btn-outline-primary'>
                        Reset My Password
                    </button>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default ResetPassword