import React from 'react';
import logo from "../img/logo.png";
import { Link } from 'react-router-dom';
import {NavStyle} from "./NavStyle";

export default function Navbar() {
  return (
    <div>
    <div className='navbar' style={{...NavStyle.style}}>
      <img src={logo} alt=""  style={{...NavStyle.img}}/>
      <ul className='navmenu' style={{...NavStyle.NavMenu}}>
        <Link to={"/signup"} style={{...NavStyle.a}}>
        <li style={{...NavStyle.li}}>SignUp</li>
        </Link>
        <Link to={"/signIn"} style={{...NavStyle.a}}>
        <li style={{...NavStyle.li}}>SignIn</li>
        </Link>
        <Link to={"/profile"} style={{...NavStyle.a}}>
        <li style={{...NavStyle.li}}>Profile</li>
        </Link>
      </ul>
    </div>
    </div>
  );
}
