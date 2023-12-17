import React from 'react'
import { Outlet, Link } from "react-router-dom";
function Register() {
  return (
    
    <div class="h-screen flex items-center " style={{background:'#a8bcff'}}>
    <div class="mx-auto w-1/4 bg-white rounded-2xl p-5">
      <h1 className=' text-4xl font-mono underline text-center '>Chat Me</h1>
      <h1 className=' text-2xl font-mono text-center '>Register</h1>

      <form>
      <input type="text" 
        placeholder='name'
        className="shadow appearance-none focus:border-blue-500  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-2"
        />
        <input type="email" 
        placeholder='email'
        className="shadow appearance-none focus:border-blue-500  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-2"
        />
         <input type="password" 
        placeholder='password'
        className="shadow appearance-none border focus:border-blue-500  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-2"
        />
        <div className="flex items-center justify-center w-full">
    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 m-2">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="https://static.vecteezy.com/system/resources/previews/000/423/286/original/avatar-icon-vector-illustration.jpg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG, or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" />
    </label>
</div>

         

        <button type='submit' className='p-2 rounded text-white bg-[#a8bcff] hover:bg-blue-400 w-full m-2'>Sign up</button>
        
      </form>
      <h1 className='  font-mono text-center '> Already registered? <a className=' underline'> <Link to="/login">Login</Link></a></h1>

    </div>
  </div>
  )
}

export default Register