import React from 'react'
import Right from './Right'
import Left from './Left'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import useGetSuggestedUsers from '../../hooks/useGetSuggestedUsers';

const Message = () => {
  useGetSuggestedUsers()
    const dispatch=useDispatch();
  
  return (
    <div className="wrapper h-screen w-screen bg-red-500 flex">
  <Left/>
      <Right/>
    

    </div>
  )
}

export default Message