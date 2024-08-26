
import './App.css';
import Auth from './components/auth/Login';
import { useDispatch, useSelector } from 'react-redux';

import io from "socket.io-client"
import { useEffect } from 'react';
import Message from './components/message/Message';
import Mainlayout from './components/Mainlayout';
import { setOnlineUsers, setSocket } from './redux/chatSlice.js';
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
// import { useEffect } from 'react';
import Feed from "./components/Feed/Feed.jsx"
import ProtectedRoute from './ProtectedRoute.js';


const router = createBrowserRouter([
  {
    path: "/auth",
    element: <Auth/>
  },
  

  {
    path: "/message",
    element:<ProtectedRoute> <Message></Message></ProtectedRoute>
  },
  {
    path: "/",
    element:<ProtectedRoute> <Mainlayout></Mainlayout></ProtectedRoute>,
    children:[
      {
        path:"/",
        
        element:<ProtectedRoute><Feed></Feed></ProtectedRoute>
      },
      {
        path:"/profile",
        element:<ProtectedRoute> <h1>hi</h1></ProtectedRoute>
        
      }
    ]
  },
]);
function App() {
    const dispatch = useDispatch()
  // const dispatch=useDispatch()
  const authUser= useSelector((state)=>state.user.loggedinUser)
  const socket= useSelector((state)=>state.chat.socket)

useEffect(()=>{
 if(authUser){
  const socket= io("http://localhost:9000",{
    query:{
      userId:authUser?._id
    },
    transports:["websocket"]
  })
  dispatch(setSocket(socket))
  socket?.on("getOnlineUser",(data)=>{
    dispatch(setOnlineUsers(data));
    console.log(data)
  })
 
 }

  return ()=>{
    socket?.close()
    dispatch(setSocket(null))
  }
 
  },[authUser,dispatch])  
  return (
  //<>
  <>

  

  <RouterProvider router={router} >
 
    </RouterProvider>


 
 
 
  
  </>
  );
}

export default App;
