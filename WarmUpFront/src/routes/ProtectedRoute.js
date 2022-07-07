import React from 'react'
import { Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { authContext } from '../context/authContext'

export const ProtectedRoute = ({children}) => {
  
  const { user } = useContext(authContext)

  if( user ) return <>{children}</>

  return <Navigate to='/login'/>

}