import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId } = useParams() 
//  Bhai userId humne routes me diya tha and useParams hook url se data leta hai
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>User: {userId}</div>
  )
}

export default User