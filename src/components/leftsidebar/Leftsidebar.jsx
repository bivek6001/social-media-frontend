import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { IoCreateOutline } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
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
    icon:<Link to="/"> <IoHomeOutline size={24} /></Link>,
    name: "Home",
  },
  {
    icon: < IoSearchOutline size={"24px"}/>,
    name: "Search",
  },
  {
    icon: <Link to="/message"><FaTelegramPlane size={25} /></Link>,
    name: "Messages",
  },
  {
    icon: <IoIosNotifications size={"25px"} />,
    name: "Notifications",
  },
  {
    icon: <IoCreateOutline  size={25}/>,
    name: "Create",
  },
  {
    icon:<Link to="/user/profile"><img src="https://play-lh.googleusercontent.com/2-Mw1u0zRRb8bbe-AQe_MPIMqk_8MBT9ojoVZL3FER0HAYwJpq6KW4Ebg3AYbuS0dw" className="w-[30px] h-[30px] rounded-full"/></Link>,
    name: "Profile",
  },
  {
    icon:<IoIosLogOut size={"26px"} />,
    name: "Logout",
  }
];
const Leftsidebar = () => {
  const [open,setOpen]=useState(false)
  const dispatch = useDispatch();
    const navigate=useNavigate()
    const handleLogout =async  () => {
        try{
            const response= await axios.get("http://localhost:9000/user/logout",{
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

  

  return <div className="w-[15%]   bg-white border-gray-300  left-0 top-0  h-screen px-4 border-r">
    <div className="flex flex-col">
    <div className="logo flex justify-center">
        <img src="https://images-platform.99static.com//bABwyPaSlYVZW-E95OkdmD00XZY=/221x221:780x781/fit-in/500x500/99designs-contests-attachments/129/129933/attachment_129933858" alt="logo" className="w-[100px] h-[100px]" />
    </div>
    {
        sidebarItems.map((item, index) => (
          <div onClick={()=>{
            
            sidebarHandler(item.name);
           
          }} key={index} className="sidebar-item h-[55px] flex items-center gap-3 hover:bg-gray-100 cursor-pointer rounded-lg p-3">
            {item.icon}
            <span className="font-semibold text-md">{item.name}</span>
          </div>
        ))

    }
    {open && <CreatePost close={setOpen}/>}
    
    </div>
  </div>;
};

export default Leftsidebar;
