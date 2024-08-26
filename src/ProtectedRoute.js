import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const navigate=useNavigate()
    const user= useSelector((state)=>state.user.loggedinUser)
    useEffect(()=>{
        if(!user){
            navigate("/auth")
        }

    },[])
  return (
   <>{children}
   </>
  )
}

export default ProtectedRoute