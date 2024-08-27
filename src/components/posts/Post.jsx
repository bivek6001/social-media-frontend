import React from 'react'
import { FiMessageCircle } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { useState } from 'react';
import Modal from './Modal';
import toast from 'react-hot-toast';
import CommentDialog from "./CommentDialog.jsx"
import axios from 'axios';
import { useSelector,useDispatch } from 'react-redux';
axios.defaults.withCredentials=true;
const Post = ({post}) => {
  const authUser= useSelector((state)=>state.user.loggedinUser)

  const[open,setOpen]=useState(false)
  const [openComment,setOpenComment]=useState(false)
  
  const [text,setText]=useState("")
  const [liked,setLiked]=useState(post.likes.includes(authUser?._id)|| false);
  const [postLike,setPostLike]=useState(post.likes.length);
  const likeDislikeHandler= async(id)=>{
    try {
      const action = liked ? "dislike" : "like";
      const response= await axios.post(`http://localhost:9000/post/${action}/${id}`)
      if(response.data.success){
        const updatedLikes= liked ? postLike-1 : postLike+1;
        setPostLike(updatedLikes)
        setLiked(!liked) 
        toast.success(response.data.message)
      }
      
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }
  const commentHandler=async(id)=>{


    try {
      const response= await axios.post(`http://localhost:9000/post/comment/${id}`,{text

      },
      {
        headers:{
          token:localStorage.getItem('token')
      },
      }
    );
      if(response.data.success){
        setText("")
        toast.success(response.data.message)
      }

    } catch (error) {
      toast.error(error.response.data.message)
      
    }
  }

  return (
    <div className="shadow-lg rounded-md  w-[45%] p-4 flex flex-col gap-4 ">

    <div className="info flex justify-around items-center">
      <img src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg" alt="post owner" className='w-[45px] h-[45px] rounded-full' />
      <p className='font-semibold'>{post.author.username}</p>

      <div className=' flex justify-center items-center'>
      <BsThreeDots onClick={()=>{
        setOpen(true)
      }} />
      </div>
    </div>
    <div className="post flex justify-center items-center flex-col">
     
      
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRX7zmrU5OWn1HyRDHG1z36Eu7rfGQglKn_g&s" alt="post" className='w-[70%] h-[40%] rounded-md object-contain' />

    </div>
    <div className="features flex justify-between items-center">
   <div className='flex gap-2'>
   {liked ? <FaHeart className='hover:text-gray-600 text-red-600' size={"22px"} onClick={()=>{
     likeDislikeHandler(post._id)
   }} />:
    <FaRegHeart className='hover:text-gray-600' size={"22px"}  onClick={()=>{
     likeDislikeHandler(post._id)
   }}  />}
    <FiMessageCircle className='hover:text-gray-600' size={"22px"} onClick={()=>{
      setOpenComment(true)
    }} />
   </div>
   <FaBookmark className='hover:text-gray-600' size={"22px"}  />
    </div>

    <span className='font-medium '>{postLike}</span>
    <p>
      <span className='font-medium'>{post.author.username}</span>
      {post.caption}
    </p>
    <span className='cursor-pointer text-sm text-gray-400'  onClick={()=>{
      setOpenComment(true)
    }}> View all 10 Comments</span>
   { openComment &&   <CommentDialog close={setOpenComment}/>}
      <div className="comment">
        <form method="post" className='flex justify-between' onSubmit={()=>{
          commentHandler(post._id)
          
        }} >
          <input  type="text" placeholder='Add a comment' className='w-[100%]  h-[30px] outline-none' value={text} onChange={(e)=>{
            setText(e.target.value);
          }}  />
          <button type="submit" className='text-[#0095F6] font-medium'>Post</button>
        </form>
      </div>
    {open && <Modal close={setOpen} id={post._id} post={post}/>}


    </div>
  )
}

export default Post