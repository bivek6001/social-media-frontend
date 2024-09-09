import React from 'react'
import useGetSuggestedUsers from '../../hooks/useGetSuggestedUsers'
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSelectedUser } from '../../redux/userSlice';
const Rightsidebar = () => {
  useGetSuggestedUsers();
  const users= useSelector((state)=>state.user. suggestedUsers)
const dispatch = useDispatch()

  // console.log(users)
  return (
      <div className='p-2 w-[20%] border-l px-3' >


        <div className='flex'>
          <img src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg" alt="profile" className='w-[50px] h-[50px] rounded-full' />
          <p>Bivek singha</p>
         <Link to="/user/profile"><button >Profile</button></Link> 

        </div>
        <div className="flex flex-col py-4">
          <h1 className='text-base font-semibold'>Suggestions for you</h1>
          {users?.map((user)=>{
            return (
             <Link to={`/profile/${user._id}`} onClick={()=>{
              console.log(user)
              dispatch(setSelectedUser(user));
             }}><div className='flex justify-between items-center gap-6 mt-5'>
              <div>
                <img src={user.profilePicture} alt="profile-pic" className='h-[50px] w-[50px] rounded-full' />
              </div>
              <div className="username">
                <p className='font-semibold'>{user.username}</p>
              </div>
              <button className='bg-[#0095F6] text-white p-2 rounded-lg'>Follow</button>
              </div></Link> 
            )
          })}
        </div>
      </div>
  )
}

export default Rightsidebar