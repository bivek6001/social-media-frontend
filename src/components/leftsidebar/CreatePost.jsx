import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import toast from "react-hot-toast"
import { AiOutlineLoading } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { setPost } from '../../redux/postSlice';
import { useDispatch, useSelector } from 'react-redux';
const CreatePost = ({close}) => {
    const posts= useSelector((state)=>state.post.posts)
    const [file,setFile]=useState(null);
const dispatch=useDispatch()
    const [caption,setCaption]=useState('');
    const [loading,setLoading]=useState(false);
    const handleChange = (e) => {
        setCaption(e.target.value)
    }
    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            setLoading(true);
            const response=await axios.post("https://social-media-backend-8ow4.onrender.com/post/addPost",{
                caption
            },{withCredentials:true})
            console.log(response.data)
            console.log(caption)
        if(response.data.success){
            toast.success(response.data.message)
            dispatch(setPost([response.data.newPost,...posts]))
            close(false)
            setCaption('');
           
        }

            
        } catch (error) {

            toast.error(error.response.data.message)
            
        }
        finally{

            setLoading(false);
        }

    }





  return (
    <div className='fixed top-0 left-0 bg-opacity-10 bg-black backdrop-blur-sm h-screen w-screen flex justify-center items-center'>

    <div className="bg-white w-[50%] h-[50%] flex items-center flex-col p-3 rounded-lg relative">
        <h1 className='text-xl font-semibold'>Create New Post</h1>
                    <form method="post" onSubmit={handleSubmit} encType='multipart/form-data' className='flex flex-col items-center w-[100%]'>
                      <textarea name="" id="" required className='w-[100%] outline-none ' rows={4} placeholder="What's on your Mind?" value={caption} onChange={handleChange} ></textarea>
                        {/* <input type="file" name="photo"  onChange={(event)=>{
                            const file=event.target.files[0];
                            console.log(file)
                           
                        }
                        }/> */}
                        {loading ? <button className='bg-slate-600 w-[90%] flex justify-center items-center text-white font-semibold rounded-md gap-2 px-3 text-sm'> <AiOutlineLoading size={32} color="white" className='animate-spin my-2' /> please wait..... </button>:  <button type='Submit' className='w-[90%] bg-[#0095F6] hover:bg-[#258BCF] text-white p-2 rounded-md font-semibold'>Post</button> }
                       
                    </form>
                    <AiOutlineClose  className='absolute top-[-20px] right-[-13px]  ' size={"20px"} onClick={()=>{
            close(false)
           }}/>
    </div>


    </div>
  )
}

export default CreatePost