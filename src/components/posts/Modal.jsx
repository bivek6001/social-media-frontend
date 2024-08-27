// import { trusted } from 'mongoose';
import axios from "axios";
import toast from "react-hot-toast"
import React from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { useSelector,useDispatch } from "react-redux";
import { setPost } from "../../redux/postSlice";
const Modal = ({close,id,post}) => {
  const authUser= useSelector((state)=>state.user.loggedinUser)
  const posts= useSelector((state)=>state.post.posts)
  const dispatch=useDispatch()
  async function handleDelete(){
    try{
        const response= await axios.delete(`http://localhost:9000/post/delete/${id}`,{
          headers:{
            token:localStorage.getItem('token')
        },
          withCredentials:true
        })
        if(response.data.success){
          const updatedPosts=posts.filter(p=>p._id!==id)
          dispatch(setPost(updatedPosts))
          toast.success('Post deleted successfully')
          close(false)
          
        }
    }catch(e){
      toast.error(e.response.data.message)
    }
  }
  console.log(id)


  return (
    <div className=' bg-black bg-opacity-20 backdrop-blur-sm inset-0 fixed top-0 left-0 h-screen w-screen flex justify-center items-center'>
        <div className='bg-white w-[30%] relative h-[200px] rounded-md flex flex-col items-center gap-3 justify-center' >
          <button className='rounded-lg
           border-black w-[120px] bg-fuchsia-400 h-[45px] border-2'>Unfollow</button>
             <button className='rounded-lg
            w-[120px]  h-[50px]' >Add to bookmarks</button>
            {authUser?._id== post?.author._id  && <button className='rounded-lg
            w-[120px]  h-[45px] ' onClick={handleDelete}>Delete</button>}
           <AiOutlineClose  className='absolute top-0 right-[-30px] ' size={"20px"} onClick={()=>{
            close(false)
           }}/>
        </div>
       
    </div>
  )
}

export default Modal