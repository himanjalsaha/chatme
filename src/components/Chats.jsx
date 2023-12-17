import React from 'react'
import { FaVideo } from "react-icons/fa";
import { IoPersonAddSharp } from "react-icons/io5";
import { HiDotsVertical } from "react-icons/hi";
import Messages from './Messages';
import Input from './Input';
const Chats = () => {
  return (
    <div  style={{flex:2}} className='border border-black rounded-r'>
        <div style={{height:'82%'}}>
        <nav className='text-white font-bold  bg-indigo-600 p-3 flex items-center justify-between  '>
           <div><text className='text-xl font-thin'>Heramb</text> </div>
           <div className='flex items-center'>
            <FaVideo className='m-3 hover:bg-slate-500 rounded-full  w-7 h-7 p-1  '/>
            <IoPersonAddSharp className='m-3  hover:bg-slate-500 rounded-full w-7 h-7 p-1 '/>
            <HiDotsVertical className='m-3  hover:bg-slate-500 rounded-full w-7 h-7 p-1'/>
           </div>
        </nav>
        <div className='bg-indigo-200 flex flex-col h-full overflow-scroll overflow-x-hidden'>
            <Messages/>
            <Messages/>
            <Messages/>
            <Messages/>
            <Messages/>
            <Messages/>
            <Messages/>
            <Messages/>


        </div>

        <Input />
        </div>
       
       
       
       
    </div>
  )
}

export default Chats