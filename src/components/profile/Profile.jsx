import React, { useState } from 'react'
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { useParams } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import axios from 'axios';
import toast from 'react-hot-toast';
const Profile = () => {
  const {id}= useParams()
  
  console.log(id);
  const selectedUser = useSelector((state) => state.user.selectedUser);
  const loggedinUser= useSelector((state) => state.user.loggedinUser);
  console.log(selectedUser);
  const [following,setFollowing]=useState(loggedinUser.following.includes(selectedUser?._id))
  // console.log
  const handleFollowUnfollow= async()=>{
    try {

      const response= await axios.get(`http://localhost:9000/user/followorunfollow/${id}`,{
        headers:{
          token:localStorage.getItem('token')
        }
      })
      if(response.data.success){
        toast.success(response.data.message)
      }
      
      console.log(response)
    } catch (error) {
      
    }
    finally{

    }
  }



  return (
    <div className='w-[100%]'>
      <div className="sect1 h-[300px] w-[100%]   flex justify-center  py-3 border-b">
        <div className="left  w-[30%] flex justify-center items-center">
          <img src={selectedUser.profilePicture} alt="logo" className='rounded-full h-[130px] w-[130px]' />
        </div>
        <div className="right w-[70%] flex flex-col gap-2  p-4">
          <div className="btns flex justify-start items-center gap-3">
            <span className='font-semibold'>@{selectedUser.username}</span>
            <button className='w-[100px] h-[34px] bg-[#1877F2] rounded-md text-white font-semibold' onClick={()=>{
              handleFollowUnfollow()
              setFollowing(!following)
            }} >{following ? "unfollow" : "follow"}</button>
            <button className='w-[100px] h-[34px] bg-[#262626] rounded-md text-white font-semibold'>Message</button>
          </div>


          <div className="features flex justify-start gap-5 items-center">
            <p className='font-semibold'>{selectedUser.post.length} posts</p>
            <p className='font-semibold'>{selectedUser.followers.length} followers</p>
            <p className='font-semibold'>{selectedUser.following.length} following</p>
          
          </div>
        <div className="username">
          <p className='font-bold'>{selectedUser.username}</p>
        </div>

          <div className="bio">
            <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis veniam veritatis odio eligendi omnis at hic? Quasi at ipsum tempore voluptatibus, accusantium omnis neque maxime animi! Debitis doloribus quibusdam fugit.</p>

          </div>
        </div>
      </div>


      <div className="sect2 w-[100%] flex justify-center items-center ">

        <div className='flex justify-evenly items-center w-[100%]'>
      <div className='font-bold text-sm  flex justify-center items-center gap-2'><TfiLayoutGrid4Alt />POSTS</div>

      </div>

      </div>




    </div>
  )
}

export default Profile