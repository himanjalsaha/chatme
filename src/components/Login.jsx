import React from 'react'
import { Outlet, Link } from "react-router-dom";

const Login=()=> {
  return (
   
    <div class="h-screen flex items-center " style={{background:'#a8bcff'}}>
    <div class="mx-auto w-1/4 bg-white rounded-2xl p-5">
      <h1 className=' text-4xl font-mono underline text-center '>Chat Me</h1>
      <h1 className=' text-2xl font-mono text-center '>Login</h1>

      <form>
        <input type="email" 
        placeholder='email'
        className="shadow appearance-none focus:border-blue-500  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-2"
        />
         <input type="password" 
        placeholder='password'
        className="shadow appearance-none border focus:border-blue-500  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-2"
        />

        <button type='submit' className='p-2 rounded bg-[#a8bcff] hover:bg-blue-400 w-full m-2'>Login</button>
        
      </form>
      <h1 className='  font-mono text-center '>dont have an account? <a className=' underline'> <Link to="/register">register</Link></a></h1>

    </div>
  </div>
  )
}

export default Login