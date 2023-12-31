import { signOut } from 'firebase/auth';
import React, { useContext } from 'react'
import { IoLogOutOutline } from "react-icons/io5";
import { auth } from '../firebase';
import { Authcontext } from '../context/Authcontext';


const Navbar = () => {

  const {currentuser} =useContext(Authcontext)
  return (
    <div className='w-fill   bg-indigo-800'>
        <div className='flex flex-row items-center justify-evenly p-2'>
            <div className=' font-mono text-white text-3xl'>Chat me</div>
            <div className=' flex items-center'>
                <div className='text-white flex items-center m-1'>
                    <img src={currentuser.photoURL} alt="" className='w-10 h-10 m-1 rounded-full' />
                    <text className=' font-bold'>{currentuser.displayName}</text>
                </div>
                <div><button onClick={()=>signOut(auth)} className='rounded bg-slate-700 text-white font-bold  hover:bg-red-400 p-2'><IoLogOutOutline/></button></div>
                </div>
        </div>

    </div>
  )
}

export default Navbar