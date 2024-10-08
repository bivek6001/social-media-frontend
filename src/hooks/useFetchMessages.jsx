import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import axios from 'axios';
import { setMessages } from '../redux/chatSlice';
axios.defaults.withCredentials=true
const useFetchMessages = () => {

    const selectedUser= useSelector((state)=>state.user.selectedUser);
    const dispatch=useDispatch();
    const messages=useSelector((state)=>state.chat.messages)
    console.log(selectedUser)
    const fetchMessages= async()=>{
        try {
            const response= await axios.get(`https://social-media-backend-8ow4.onrender.com/message/all/${selectedUser?._id}`,
             { headers:{
                    token:localStorage.getItem('token')
                },
                    withCredentials:true}
            );
            console.log(response)
            console.log(response.data.messages)
            if(response.data.success){
              
                dispatch(setMessages(response.data.messages))
            }
        } catch (error) {
            
        }
    }
    
 useEffect(()=>{

   
fetchMessages();


 },[selectedUser,dispatch])
}

export default useFetchMessages