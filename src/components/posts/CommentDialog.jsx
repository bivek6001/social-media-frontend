import React from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';
const CommentDialog = ({close}) => {
  const [text,setText]=useState("")
  const handleSubmit=(e)=>{
    e.preventDefault();
    alert(text)
  
    // send comment to server
  }

  return (
    <div className=' bg-black bg-opacity-30 backdrop-blur-sm   fixed top-0 left-0 h-screen w-screen flex justify-center items-center'>

      <div className='bg-white flex justify-center relative w-[60%] h-[60%] rounded-md '>
     <div className="left w-[50%] h-[100%]">   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRX7zmrU5OWn1HyRDHG1z36Eu7rfGQglKn_g&s" alt="post" className='w-[100%] h-[100%] rounded object-contain' /></div>
     <div className="right  w-[50%] h-[100%] relative">
     <div className="info flex items-center justify-between gap-2  p-2 ">
     <div className='flex justify-center items-center gap-2 '>
     <img src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg" alt="post owner" className='w-[45px] h-[45px] rounded-full' />
     <p className='font-medium' >Username</p>
     </div>
      <p>comment</p>

      <div>
    
      </div>
    </div>
    <div className="comments">
      comments
    </div>


    <div className="input-comment absolute bottom-0 w-[100%] p-2 ">
    <form method="post" className='flex justify-between w-full' onSubmit={handleSubmit} >
          <input  type="text" value={text} placeholder='Add a comment' className='w-[100%]  h-[30px] outline-none' onChange={(e)=>{
            setText(e.target.value);
          }}  />
          <button type="submit" disabled={!text.trim()} className='text-[#0095F6] font-medium'>Post</button>
        </form>
    </div>
      <div>
   
      </div>
     </div>
     <AiOutlineClose  className='absolute top-[-10px] right-[-40px] ' size={"30px"} onClick={(e)=>{
      e.stopPropagation();
            close(false)
           }}/>
      </div>
    </div>
  )
}

export default CommentDialog