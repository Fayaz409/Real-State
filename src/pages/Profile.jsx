import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  const {currentUser}=useSelector((state)=>state.user)
  return (
    <div className='p-3 max-w-lg mx-auto'>
      
      <h1 className='text-3xl font-semibold text-center my-8'>
         Profile
        </h1>
        <form className='flex flex-col gap-4'>
          <img className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2' src={currentUser.avatar} alt="Profile" />
          <input type="text" id='username' placeholder='user-name' className='border p-3 rounded' />
          <input type="email" id='email' placeholder='email' className='border p-3 rounded' />
          <input type="password" id='password' placeholder='password' className='border p-3 rounded' />
          <button className='bg-slate-700 text-white rounded-lg
           p-3 uppercase hover:opacity-95  '>Update</button>
        </form>
        <div className='flex justify-between'>
          <span className='my-2 font-semibold text-red-700 cursor-pointer '>
            Delete Account
          </span>
          <span className='my-2 font-semibold text-red-700 cursor-pointer'>Sign Out</span>
        </div>
         </div>
  )
}

export default Profile