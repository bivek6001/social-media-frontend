import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setSuggestedUsers } from '../redux/userSlice'
import toast from "react-hot-toast"
const useGetSuggestedUsers = () => {
    const dispatch = useDispatch()

 useEffect(()=>{

const fetchUser=async()=>{
    try{
        const response= await axios.get("https://social-media-backend-8ow4.onrender.com/user/suggestions")
        if(response.data.success){
            dispatch(setSuggestedUsers(response.data.suggestions))
        }
}catch(e){
    toast.error(e.response.data.message)
}
}
fetchUser()

 },[])
}

export default useGetSuggestedUsers