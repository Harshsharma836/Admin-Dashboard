import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import React, { useState } from 'react';
import LogingImg from "./aseets/blackImage.jpg";
import { BrowserRouter as Router } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';




function Login(){  
   const navigate = useNavigate();

  return (
  

    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      <div className='hidden sm:block'>
        <img className='w-full h-full object-cover' src={LogingImg}></img>
      </div>

      <div className='flex flex-col justify-center'>
        <form className='max-w-[400px] w-full mx-auto  p-8 px-8 rounded-lg' >
          {/* <div><GoogleLogin></GoogleLogin></div> */}
          <h2 className='text-4xl dark:text-black font-bolt '>SIGN IN</h2>
          <p>Sign in to your account</p>


          <div className='container'>
          <div className=' inline-block float-left scale-51'><GoogleOAuthProvider clientId="652237082775-1inove9e5pjpn00k1i54ftv9n7n3ojb9.apps.googleusercontent.com">
            <GoogleLogin
              onSuccess={credentialResponse => {
                var decoded = jwt_decode(credentialResponse.credential);
                // Navigate to the Dashboard component with the decodedData prop
                navigate('./dashboardComponent/Dashboard.js', { state: { decodedData: decoded } });
              }}
              onError={() => {
                console.log('Login Failed')
              }}
            />
          </GoogleOAuthProvider></div>
          <div className="clear-both"></div>
          </div>

          <div className='flex flex-col text-black-400 py-2'>
            <label>Email address</label>
            <input className='bg-gray-100 rounded-lg bg-black-700 mt-2 p-2 focus:border-blue-500 focus:bg-black-800 focus:outline-none' type='text'></input>
          </div>
          <div className='flex flex-col text-black-400 py-2'>
            <label>Password</label>
            <input className='bg-gray-100 rounded-lg bg-black-700 mt-2 p-2 focus:border-blue-500 focus:bg-black-800 focus:outline-none' type='password'></input>
          </div>
          <div className='flex justify-between text-black-400 py-2'>
          <button className="text-blue-500" >Forgot Password ?</button> 
          

          </div>  
          <button className=' bg-black w-full my-5 py-2 bg-black-500 shadow-lg  hover:shadow-black-500/40 text-white font-semibold rounded-lg'>Sign In</button>
          <p>Don't have an account? <button className="text-blue-500" >Register here</button></p>
        </form>
      </div>
    </div>

  
  );
};

export default Login;
