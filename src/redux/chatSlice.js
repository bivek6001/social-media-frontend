import {createSlice} from "@reduxjs/toolkit"

const initialState={
    socket:null,
    messages:[],
    onlineUsers:[]
}


const chatSlice=createSlice({
    name:"chat",
    initialState,
    reducers:{
        setSocket:(state,action)=>{
        state.socket=action.payload
       },
       setOnlineUsers:(state,action)=>{
        state.onlineUsers=action.payload
       },
       setMessages:(state,action)=>{
        state.messages=action.payload
       }
    }
})


export const {setOnlineUsers,setMessages,setSocket}=chatSlice.actions
export default chatSlice.reducer