import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'

const Header = () => {
  const {currentUser}=useSelector((state)=>state.user)
  return (
    <header className='bg-slate-200 shadow-md'>
       <div className='flex justify-between items-center max-w-6xl mx-auto p-4'>

       <Link to='/'>
       <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
        <span className='text-slate-500'>Virtual</span>
        <span className='text-slate-700'>State</span>
       </h1>

       </Link>
       <form className='flex items-center bg-slate-100 p-3 rounded-lg' >
        <input className='focus:outline-none rounded bg-transparent w-24 sm:w-64' type="text" placeholder='Search...' />
        <FaSearch className='text-slate-600'/>
       </form>
       <ul className='flex gap-4'>
        <Link to='/'>
        <li className=' font-bold hidden sm:inline text-slate-700 hover:underline'>Home</li>
        
        </Link>
        <Link to='/About'>

        <li className='font-bold hidden sm:inline text-slate-700 hover:underline'>About</li>
        </Link>
        <Link to='/Profile'>
          {currentUser? <img className='w-12 rounded-full ' src={currentUser.avatar}  />
          :<li className='font-bold text-slate-700 hover:underline'>Sign In</li>}

        
        </Link>
       </ul>

       </div>
        
        
        </header>
  )
}

export default Header