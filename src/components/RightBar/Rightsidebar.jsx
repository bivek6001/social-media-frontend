import React from 'react'
import useGetSuggestedUsers from '../../hooks/useGetSuggestedUsers'
import { useSelector } from 'react-redux';
const Rightsidebar = () => {
  useGetSuggestedUsers();
  const users= useSelector((state)=>state.user. suggestedUsers)
  // console.log(users)
  return (
      <div className='p-2' >
        <div className="flex flex-col">
          <h1 className='text-xl font-medium'>Suggestions for you</h1>
          {users?.map((user)=>{
            return (
              <div className='flex justify-between items-center gap-6 mt-3'>
              <div>
                <img src={user.profilePicture} alt="profile-pic" className='h-[50px] w-[50px] rounded-full' />
              </div>
              <div className="username">
                <p className='font-semibold'>{user.username}</p>
              </div>
              <button className='bg-[#0095F6] text-white p-2 rounded-lg'>Follow</button>
              </div>
            )
          })}
        </div>
      </div>
  )
}

export default Rightsidebar