import React from 'react'
import { Outlet } from 'react-router-dom'
import Leftsidebar from './leftsidebar/Leftsidebar'
import Rightsidebar from './RightBar/Rightsidebar'
import useGetAllPost from '../hooks/useGetAllPost'

const Mainlayout = () => {
  
  useGetAllPost();
  return (
    <div className='flex justify-center w-screen  '>
        <Leftsidebar/>

        <div className='w-[55%]  '>
            <Outlet/>
        </div>
        <Rightsidebar/>
       
    </div>
  )
}

export default Mainlayout