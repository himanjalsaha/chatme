import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
const Sidebar = () => {
  return (
    <div style={{flex:1}} className='border border-black bg-[#3e3c62] rounded-l'>
        <Navbar/>
        <Search/>
    </div>
  )
}

export default Sidebar