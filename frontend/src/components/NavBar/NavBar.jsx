import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom";
import logo from "../../assets/images/logo.png";
import searchIcon from "../../assets/images/search_icon.svg";
import bellIcon from "../../assets/images/bell_icon.svg";
import profileImage from "../../assets/images/profile_img.png";
import caretIcon from "../../assets/images/caret_icon.svg";
import './NavBar.css';
import { useAuth } from '../../provider/AuthContext';
function NavBar() {
    const [navColor,setNavColor]= useState(false);
    const navigate= useNavigate();
    const {user}= useAuth();
    const changeNavColor = () => {
    if (window.scrollY >= 80) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
    };
    useEffect(()=> {
        window.addEventListener("scroll",changeNavColor);
        return ()=> {
            window.removeEventListener("scroll", changeNavColor);
        };
    },[]);
    const handleLogout= ()=> {
     localStorage.clear();
     navigate('/login');
    };
  return (
    <div className={navColor ? 'navbar nav-dark' : 'navbar'}>
      <div className='navbar-left'>
        <img src={logo} alt='' />
        <ul>
          <li>Home</li>
          <li>TV shows</li>
          <li>Movies</li>
          <li>My List</li>
          <li>Browse by Langauges</li>
        </ul>
      </div>
      <div className='navbar-right'>
        <img src={searchIcon} alt='' className='icons' />
        <p>Children</p>
        <img src={bellIcon} alt='' className='icons' />
        <div className='navbar-profile'>

          {user ? user?.username : <img src={profileImage} alt='' className='profile' />}
          <img src={caretIcon} alt='' />
          <div className='dropdown'>
            {user ? <p onClick={handleLogout}>Sign out of Netflix</p> : <p onClick={()=> navigate("/login")}>Sign in of Netflix</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar
