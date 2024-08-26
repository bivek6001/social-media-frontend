import React from "react";
import { CiHome } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegMessage } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import { IoIosAdd } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import toast from 'react-hot-toast';
import { useDispatch } from "react-redux";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { setLoggedinuser } from "../../redux/userSlice";
import CreatePost from "./CreatePost";
import { useState } from "react";
const sidebarItems = [
  {
    icon: <CiHome size={"25px"}/>,
    name: "Home",
  },
  {
    icon: < IoSearchOutline size={"25px"}/>,
    name: "Search",
  },
  {
    icon: <Link to="/message"><FaRegMessage size={"25px"} /></Link>,
    name: "Messages",
  },
  {
    icon: <IoIosNotifications size={"25px"} />,
    name: "Notifications",
  },
  {
    icon: <IoIosAdd  size={"25px"}/>,
    name: "Create",
  },
  {
    icon:<img src="https://play-lh.googleusercontent.com/2-Mw1u0zRRb8bbe-AQe_MPIMqk_8MBT9ojoVZL3FER0HAYwJpq6KW4Ebg3AYbuS0dw" className="w-[30px] h-[30px] rounded-full"/>,
    name: "Profile",
  },
  {
    icon:<IoIosLogOut size={"25px"} />,
    name: "Logout",
  }
];
const Leftsidebar = () => {
  const [open,setOpen]=useState(false)
  const dispatch = useDispatch();
    const navigate=useNavigate()
    const handleLogout =async  () => {
        try{
            const response= await axios.get("https://social-media-backend-8ow4.onrender.com/user/logout",{
                withCredentials: true
            }
            )
            if(response.data.success){
                toast.success("Logged out successfully")
                navigate("/auth")
            }
           
        }
        catch(e){
            toast.error(e.response.data.message)
        }
        finally{}

    }

    const sidebarHandler = (type) => {
      
        if(type==="Logout"){
          dispatch(setLoggedinuser(null))
            handleLogout();
        }
        else if(type==="Create"){
          setOpen(true);

        }
    };

  

  return <div className="w-[16%]  fixed bg-white border-gray-300  left-0 top-0  h-screen px-4">
    <div className="flex flex-col">
    <div className="logo">
        <img src="https://images-platform.99static.com//bABwyPaSlYVZW-E95OkdmD00XZY=/221x221:780x781/fit-in/500x500/99designs-contests-attachments/129/129933/attachment_129933858" alt="logo" className="w-[100px] h-[100px]" />
    </div>
    {
        sidebarItems.map((item, index) => (
          <div onClick={()=>{
            
            sidebarHandler(item.name);
           
          }} key={index} className="sidebar-item flex items-center gap-3 hover:bg-gray-100 cursor-pointer rounded-lg p-3">
            {item.icon}
            <span>{item.name}</span>
          </div>
        ))

    }
    {open && <CreatePost close={setOpen}/>}
    
    </div>
  </div>;
};

export default Leftsidebar;
