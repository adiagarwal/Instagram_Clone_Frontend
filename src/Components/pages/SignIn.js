import React from 'react';
import { FormStyle } from '../styles/FormStyle';
import logo from "../img/logo.png";
import { Link } from 'react-router-dom';

export default function SignIn() {
  return (
    <div className='SignIn' style={{...FormStyle.style}}>
      <div className='loginForm' style={{...FormStyle.form}}>
        <img className='SignInLogo' src={logo} alt="" style={{...FormStyle.Logo}}></img>
        <div style={{...FormStyle.div}}>
            <input type='email' name='email' id='email' placeholder='Email' style={{...FormStyle.input}}/>
        </div>
        <div style={{...FormStyle.div}}>
            <input type='text' name='password' id='password' placeholder='Password' style={{...FormStyle.input}}/>
        </div>
        <div style={{...FormStyle.div}}>
            <input type='submit'  id='submit-btn' value={"Sign In"} style={{...FormStyle.input.submitBtn}}/>
        </div>
        <div  className="form2" style={{...FormStyle.input.form2}}>
            <p>Don't have an account? 
              <Link to={"/signup"} style={{...FormStyle.input.a}}>
              <span style={{color:"blue",cursor:"pointer"}}> SignUp</span>
              </Link>
            </p>
        </div>
      </div>
    </div>
  );
}
