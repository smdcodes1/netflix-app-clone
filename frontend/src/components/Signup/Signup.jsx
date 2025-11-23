import {useNavigate} from "react-router-dom";
import React, { useState } from 'react'
import backgroundImage from "../../assets/images/background_banner.jpg";
import Logo from "../../assets/images/logo.png";
import api from "../../webservice/api";
import "./Signup.css";
import { toast } from 'react-toastify';
import netflix_spinner from "../../assets/images/netflix_spinner.gif";
function Signup() {
  const navigate= useNavigate();
  const [email,setEmail]= useState('');
  const [username,setUsername]= useState('');
  const [password,setPassword]= useState('');
  const [loading,setLoading]= useState(false);
  const handleSignup=async (e)=> {
   setLoading(true);
   e.preventDefault();
   try {
        const res = await api.post("/api/user/signup/", { username, password, email });
        // console.log("the response is" + res);
        navigate("/login");
    } catch (err) {
        console.error("Network Error:",err.message);
        toast.error(err.code);
      
    } finally {
        setLoading(false)
    }
  };
  return (
    loading ? <div className="signup-spinner">
      <img src={netflix_spinner} alt=""/>
    </div>
    : <div style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className='signup' >
        <img className="signup-logo" src={Logo} alt='' />
        <div className='signup-form'>
          <h1>Sign up</h1>
          <form onSubmit={handleSignup}>
            <input type="email" placeholder='Enter your email' value={email}
            onChange={(e)=> setEmail(e.target.value)} required minLength={3} />
            <input type="email" placeholder='Enter your username' value={username}
            onChange={(e)=> setUsername(e.target.value)} required />
            <input type="password" placeholder='Enter your password' value={password}
            onChange={(e)=> setPassword(e.target.value)} required minLength={4} />
            <button >Sign up</button>
            <div className='form-help'>
              <div className='remember'>
                <input type="checkbox" />
                <label htmlFor="">Remember me</label>
              </div>
              <p>Need help?</p>
            </div>
          </form>
          <div className='form-switch'>
          
           <p>Already have an account?<span onClick={()=> navigate('/login')}>Sign in now</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup
