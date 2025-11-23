import backgroundImage from "../../assets/images/background_banner.jpg";
import Logo from "../../assets/images/logo.png";
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import api from "../../webservice/api";
import { ACCESS_TOKEN,REFRESH_TOKEN } from "../../constants";
import "./Login.css";
import { useAuth } from "../../provider/AuthContext";
import { toast } from 'react-toastify';
import netflix_spinner from "../../assets/images/netflix_spinner.gif";
function Login() {
    const navigate= useNavigate();
    const [username,setUsername]= useState('');
    const [password,setPassword]= useState('');
    const [loading,setLoading]= useState(false);
    const handleLogin=async (e)=> {
     setLoading(true);
     e.preventDefault();
      try {
            const res = await api.post("/api/token/", { username, password });
            // console.log(JSON.stringify(res.config.data, null, 2));
            localStorage.setItem(ACCESS_TOKEN, res.data.access);
            localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
            navigate("/");
        } catch (err) {
            console.error('Network error:',err.message);
            toast.error(err.code);

        } finally {
            setLoading(false)
        }
    };
    const RegisterAndLogout= ()=> {
     localStorage.clear();
     navigate('/signup');
    };
  return (
    loading ? <div className="login-spinner">
      <img src={netflix_spinner} alt=""/>
    </div>
    : <div style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className='login' >
        <img className="login-logo" src={Logo} alt='' />
        <div className='login-form'>
          <h1>Sign in</h1>
          <form onSubmit={handleLogin}>
            
            <input type="email" placeholder='Enter your username' value={username}
            onChange={(e)=> setUsername(e.target.value)} required />
            <input type="password" placeholder='Enter your password' value={password}
            onChange={(e)=> setPassword(e.target.value)} required minLength={4} />
            <button >Sign In</button>
            <div className='form-help'>
              <div className='remember'>
                <input type="checkbox" />
                <label htmlFor="">Remember me</label>
              </div>
              <p>Need help?</p>
            </div>
          </form>
          <br />
          <br />
          <div className='form-switch'>
           <p>New to Netflix?<span onClick={()=> {
            RegisterAndLogout();
            
           }}>Sign up now</span></p>
           <p>Signin as<span onClick={()=> navigate('/guest')}>Guest now</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login
