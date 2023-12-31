import React from 'react'
import { Outlet, Link } from "react-router-dom";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
const Login=()=> {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const handlesubmit = async (e) =>{
    e.preventDefault(); 
    const email = e.target[0].value;
    const password = e.target[1].value;
    try{
    await  signInWithEmailAndPassword(auth, email, password);
    navigate("/")

    }
    catch(err){
      setErr(true)

    }

  }

  return (
   
    <div class="h-screen flex items-center " style={{background:'#a8bcff'}}>
    <div class="mx-auto w-1/4 bg-white rounded-2xl p-5">
      <h1 className=' text-4xl font-mono underline text-center '>Chat Me</h1>
      <h1 className=' text-2xl font-mono text-center '>Login</h1>

      <form onSubmit={handlesubmit}>
        <input type="email" 
        placeholder='email'
        className="shadow appearance-none focus:border-blue-500  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-2"
        />
         <input type="password" 
        placeholder='password'
        className="shadow appearance-none border focus:border-blue-500  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-2"
        />

        <button type='submit' className='p-2 rounded bg-[#a8bcff] hover:bg-blue-400 w-full m-2'>Login</button>
        {err && <span>something went wrong</span>}
        
      </form>
      <h1 className='  font-mono text-center '>dont have an account? <a className=' underline'> <Link to="/register">register</Link></a></h1>

    </div>
  </div>
  )
}

export default Login