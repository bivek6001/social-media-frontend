import React from 'react'
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { PiBookmarkSimpleFill } from "react-icons/pi";
import { Link } from 'react-router-dom';
const UserProfile = () => {
  return (
    <div className='w-[100%]'>
      <div className="sect1 h-[300px] w-[100%]   flex justify-center  py-3 border-b">
        <div className="left  w-[30%] flex justify-center items-center">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvFBa3G11OUBYADP7ouSBgwiiRzSYorF4dfg&s" alt="logo" className='rounded-full h-[130px] w-[130px]' />
        </div>
        <div className="right w-[70%] flex flex-col gap-2  p-4">
          <div className="btns flex justify-start items-center gap-3">
            <span className='font-semibold'>Specsy coder</span>
           <Link to="/edit"> <button className='w-[100px] h-[34px] bg-slate-400 rounded-md text-white font-semibold' >Edit Profile</button></Link>
            {/* <button className='w-[100px] h-[34px] bg-slate-400 rounded-md text-white font-semibold'></button>/ */}
          </div>


          <div className="features flex justify-start gap-5 items-center">
            <p className='font-semibold'>183 posts</p>
            <p className='font-semibold'>34.3k followers</p>
            <p className='font-semibold'>33 following</p>
          
          </div>
        <div className="username">
          <p className='font-bold'>Bivek_singha</p>
        </div>

          <div className="bio">
            <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis veniam veritatis odio eligendi omnis at hic? Quasi at ipsum tempore voluptatibus, accusantium omnis neque maxime animi! Debitis doloribus quibusdam fugit.</p>

          </div>
        </div>
      </div>


      <div className="sect2 w-[100%] flex justify-center items-center ">

        <div className='flex justify-evenly items-center w-[100%]'>
      <div className='font-bold text-sm  flex justify-center items-center gap-2'><TfiLayoutGrid4Alt />POSTS</div>
      <div className='font-bold text-sm text-center flex justify-center items-center gap-2' ><PiBookmarkSimpleFill />SAVED</div>
      </div>

      </div>




    </div>
  )
}

export default UserProfile