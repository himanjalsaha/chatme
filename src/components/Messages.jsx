import React, { useContext } from 'react';
import { Authcontext } from '../context/Authcontext';

const Messages = () => {
  const {currentuser} = useContext(Authcontext)

  return (
    
       <div className='sender m-2  flex flex-row-reverse items-center '>
        <div className='m-2'>
        <img src={currentuser.photoURL} alt="" className='w-10 h-10 rounded-full' />
        <text className=' font-light text-sm'>just now</text>
        </div>
        <div className='  bg-slate-900 rounded-2xl p-2 flex items-center ' >
            <text className='text-white'>hello</text>

        </div> 

       </div>
   
  );
};

export default Messages;
