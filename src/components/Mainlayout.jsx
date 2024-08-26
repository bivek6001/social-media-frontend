import React from 'react'
import { Outlet } from 'react-router-dom'
import Leftsidebar from './leftsidebar/Leftsidebar'
import Rightsidebar from './RightBar/Rightsidebar'
import useGetAllPost from '../hooks/useGetAllPost'

const Mainlayout = () => {
  
  useGetAllPost();
  return (
    <div className='flex justify-center '>
        <Leftsidebar/>

        <div className=' w-[60%] '>
            <Outlet/>
        </div>
        <Rightsidebar/>
    </div>
  )
}

export default Mainlayout