import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { setMessages } from '../redux/chatSlice';
import { useEffect } from 'react';
const useRTM = () => {
    const dispatch = useDispatch();
    const socket= useSelector((state)=>state.chat.socket);
    const messages= useSelector((state)=>state.chat.messages)
    
 useEffect(() => {

    socket?.on("newMessage",(newMessage)=>{
        console.log(newMessage);
        dispatch(setMessages([...messages,newMessage]));
    })

 },[messages,dispatch])

}

export default useRTM