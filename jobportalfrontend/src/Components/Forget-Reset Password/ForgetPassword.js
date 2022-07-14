import React from 'react'
import './ForgetPasswordCss.css'
function ForgetPassword() {
    return (
        <>
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
        </>
    )
}

export default ForgetPassword;