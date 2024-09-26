import React from 'react';
import logo from "../img/logo.png"
import { SignUpStyle } from './SignUpStyle';
import { Link } from 'react-router-dom';
export default function Signup() {
  return (
    <div className='SignUp' style={{...SignUpStyle.style}}>
      <div className='form-container' style={{...SignUpStyle.form}}>
        <img className='SignUpLogo' src={logo} alt="" style={{...SignUpStyle.SignupLogo}}></img>
        <p className='loginPara' style={{...SignUpStyle.loginPara}}>SignUp to see photos and videos <br/> from your friends</p>
        <div style={{...SignUpStyle.input.div}}>
            <input type='email' name='email' id='email' placeholder='Email' style={{...SignUpStyle.input}}/>
        </div>
        <div style={{...SignUpStyle.input.div}}>
            <input type='text' name='name' id='name' placeholder='FullName' style={{...SignUpStyle.input}}/>
        </div>
        <div style={{...SignUpStyle.input.div}}>
            <input type='text' name='username' id='username' placeholder='Username' style={{...SignUpStyle.input}}/>
        </div>
        <div style={{...SignUpStyle.input.div}}>
            <input type='text' name='password' id='password' placeholder='Password' style={{...SignUpStyle.input}}/>
        </div>
        <p className='loginPara' style={{...SignUpStyle.loginPara,margin:"3px 0px",fontSize:"12px",marginTop:"18px"}}>By signing up , you are agreeing to <br/> instagram terms and policies.</p>
        <div style={{...SignUpStyle.input.div}}>
            <input type='submit'  id='submit-btn' value={"Sign Up"} style={{...SignUpStyle.input.submitBtn}}/>
        </div>
        <div  className="form2" style={{...SignUpStyle.input.form2}}>
            <p>Already have an account? 
              <Link to={"/signin"} style={{...SignUpStyle.input.a}}>
              <span style={{color:"blue",cursor:"pointer"}}> SignIn</span>
              </Link>
            </p>
        </div>
      </div>
    </div>
  );
}
