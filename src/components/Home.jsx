import React from 'react'
import Sidebar from './Sidebar'
import Chats from './Chats'

function Home() {
  return (
    <div className='bg-[#6879cd] h-screen flex  justify-center items-center  '>
        <div className='mx-auto w-1/2  rounded-2xl flex flex-row ' style={{width:'65%', height:'80%'}}>
            <Sidebar/>
            <Chats/>
            

        </div>
        
    </div>
  )
}

export default Home