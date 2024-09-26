import React from 'react';
import logo from "../img/logo.png"
import { FormStyle } from '../styles/FormStyle';
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <div className='SignUp' style={{...FormStyle.style}}>
      <div className='form-container' style={{...FormStyle.form}}>
        <img className='SignUpLogo' src={logo} alt="" style={{...FormStyle.Logo}}></img>
        <p className='loginPara' style={{...FormStyle.loginPara}}>SignUp to see photos and videos <br/> from your friends</p>
        <div style={{...FormStyle.input.div}}>
            <input type='email' name='email' id='email' placeholder='Email' style={{...FormStyle.input}}/>
        </div>
        <div style={{...FormStyle.input.div}}>
            <input type='text' name='name' id='name' placeholder='FullName' style={{...FormStyle.input}}/>
        </div>
        <div style={{...FormStyle.input.div}}>
            <input type='text' name='username' id='username' placeholder='Username' style={{...FormStyle.input}}/>
        </div>
        <div style={{...FormStyle.input.div}}>
            <input type='text' name='password' id='password' placeholder='Password' style={{...FormStyle.input}}/>
        </div>
        <p className='loginPara' style={{...FormStyle.loginPara,margin:"3px 0px",fontSize:"12px",marginTop:"18px"}}>By signing up , you are agreeing to <br/> instagram terms and policies.</p>
        <div style={{...FormStyle.input.div}}>
            <input type='submit'  id='submit-btn' value={"Sign Up"} style={{...FormStyle.input.submitBtn}}/>
        </div>
        <div  className="form2" style={{...FormStyle.input.form2}}>
            <p>Already have an account? 
              <Link to={"/signin"} style={{...FormStyle.input.a}}>
              <span style={{color:"blue",cursor:"pointer"}}> SignIn</span>
              </Link>
            </p>
        </div>
      </div>
    </div>
  );
}
