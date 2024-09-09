import React, { useEffect } from 'react'
import { CiSearch } from "react-icons/ci";
import {useSelector,useDispatch} from "react-redux"
import { setSelectedUser } from '../../redux/userSlice';


const Left = () => {
  
    const dispatch= useDispatch()
  const users= useSelector((state)=>state.user.suggestedUsers)
  useEffect(()=>{
    // return ()=>{
    //     dispatch(setSelectedUser(null));
    // }
  },[]);
  // const onlineUsers= useSelector((state)=>state.chat.onlineUsers)
  // const selectedUser= useSelector((state)=>state.user.selectedUser)

    
 
  return (
    <div className='w-[40%] bg-[#111B21] p-3'>
    <div className="heading h-[70px] flex justify-start p-3 w-[100%]">
    <h1 className='text-white font-bold text-2xl'>Chats</h1>
    </div>


    {/* //search button */}
        <form method="post " className='w-[100%] bg-[#202C33] p-1 rounded-md flex justify-center items-center my-3'>
      <CiSearch className='text-white' />  <input type="text" className=' bg-transparent w-[95%] outline-none p-1 text-white' placeholder='Search' />
        </form>
   
   
   
   {/* //other users */}
   {users?.map((user)=>{

    return (  <div className="person flex justify-start gap-3 w-[100%] bg-[#182229] border-[#202C33] p-2 border-b " onClick={()=>{
      dispatch(setSelectedUser(user))
  
    }}>
      <div className="img relative">
          <img src={user.profilePicture} className='w-[55px] h-[55px] rounded-full object-cover' alt="user-chat-dp" />
          <div className={`w-[10px] h-[10px] rounded-full absolute  top-0 left-10    `}></div>
      </div>
      <div className="username font-medium text-white ">{user.username}</div>
  </div>)
   })}


  
      
    
 
    </div>
  )
}

export default Left