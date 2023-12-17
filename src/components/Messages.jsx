import React from 'react';

const Messages = () => {
  return (
    
       <div className='sender m-2  flex flex-row-reverse items-center '>
        <div className='m-2'>
        <img src="https://free.clipartof.com/855-Free-Clipart-Of-A-Male-Avatar.png" alt="" className='w-10 h-10 rounded-full' />
        <text className=' font-light text-sm'>just now</text>
        </div>
        <div className='  bg-slate-900 rounded-2xl p-2 flex items-center ' >
            <text className='text-white'>hello</text>

        </div> 

       </div>
   
  );
};

export default Messages;
