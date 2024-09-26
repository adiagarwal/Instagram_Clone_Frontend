import React from 'react';
import { SignInStyle } from './SignInStyle';
import logo from "../img/logo.png";
import { Link } from 'react-router-dom';

export default function SignIn() {
  return (
    <div className='SignIn' style={{...SignInStyle.style}}>
      <div className='loginForm' style={{...SignInStyle.form}}>
        <img className='SignInLogo' src={logo} alt="" style={{...SignInStyle.SigninLogo}}></img>
        <div style={{...SignInStyle.div}}>
            <input type='email' name='email' id='email' placeholder='Email' style={{...SignInStyle.input}}/>
        </div>
        <div style={{...SignInStyle.div}}>
            <input type='text' name='password' id='password' placeholder='Password' style={{...SignInStyle.input}}/>
        </div>
        <div style={{...SignInStyle.div}}>
            <input type='submit'  id='submit-btn' value={"Sign In"} style={{...SignInStyle.input.submitBtn}}/>
        </div>
        <div  className="form2" style={{...SignInStyle.input.form2}}>
            <p>Don't have an account? 
              <Link to={"/signup"} style={{...SignInStyle.input.a}}>
              <span style={{color:"blue",cursor:"pointer"}}> SignUp</span>
              </Link>
            </p>
        </div>
      </div>
    </div>
  );
}
