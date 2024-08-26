import  { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setPost } from '../redux/postSlice'
import { useSelector } from 'react-redux'

const useGetAllPost = () => {
    const dispatch= useDispatch()
    const posts= useSelector((state)=>state.post.posts)
    const fetchAllPosts= async (req,res)=>{
        try {
            const res= await axios.get("https://social-media-backend-8ow4.onrender.com/post/all",{
                withCredentials:true
            });
            // console.log(res.data)
            if(res.data.success){

                dispatch(setPost(res.data.posts))
            }
        } catch (error) {
            console.log(error.response.data.message)
            
        }
    }
    useEffect(() => {
    fetchAllPosts()
    
      return () => {
        dispatch(setPost(null))
      }
    }, [])
    
}

export default useGetAllPost