import React from 'react'
import { IoLogOutOutline } from "react-icons/io5";


const Navbar = () => {
  return (
    <div className='w-fill   bg-indigo-800'>
        <div className='flex flex-row items-center justify-evenly p-2'>
            <div className=' font-mono text-white text-3xl'>Chat me</div>
            <div className=' flex items-center'>
                <div className='text-white flex items-center m-1'>
                    <img src="https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png" alt="" className='w-10 h-10 m-1' />
                    <text className=' font-bold'>himanjal</text>
                </div>


                <div><button className='rounded bg-slate-700 text-white font-bold  hover:bg-red-400 p-2'><IoLogOutOutline/></button></div>
                </div>
        </div>

    </div>
  )
}

export default Navbar