import React from 'react'
import { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import {signInStart,signInFailure,signInSuccess} from '../redux/user/userSlice.js'

export const SignIn = () => {
  const navigate = useNavigate()
    const [loginData,setLoginData]=useState({})
    const {loading,error}=useSelector(state=>state.user)
    const dispatch =useDispatch();

     const handleChange=(e)=>{
      
      setLoginData({
        ...loginData,
        [e.target.id]:e.target.value
      })
     }
     console.log(loginData)
     const {email,password}=loginData
     const disable=email&&password
     
     const handleSubmit=async(e)=>{
      dispatch(signInStart())
      e.preventDefault()
      try {
        const res=await fetch('/api/auth/signin',{
          method:'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          body:JSON.stringify(loginData)
        })
        const data=await res.json()

        console.log(data)
        if(data.success===false){
          dispatch(signInFailure(data.message))
        }else{

          dispatch(signInSuccess(data))
          navigate('/')
        }
         
        
        
      } catch (error) {
        dispatch(signInFailure(error.message))

        
      }


     }
    
      



  return (
      <container className='m-3 justify-center mt-10 flex flex-col max-w-lg mx-auto gap-3' >
    <div className='flex justify-center items-center'>
      <h1 className='mt-10 font-semibold  text-3xl'>Sign In</h1>
    </div>
    <form onSubmit={handleSubmit} className='mt-10 flex flex-col gap-5 ' >
      <input className=' focus:outline-none rounded-lg p-3  ' type="email" placeholder='email' id='email' onChange={handleChange}/>
      <input className='focus:outline-none rounded-lg p-3  ' type="password" placeholder='password' id='password' onChange={handleChange}/>
      <button  disabled={!disable} className='disabled:opacity-80 p-2 hover:opacity-90 text-white rounded bg-slate-700' >Log In</button>
    </form>
      <div className='flex flex-row gap-3'>
        <p>Don't Have An Account?  
          </p>
          <Link to='/signup'>
         <span className='text-blue-500'> SignUp</span>
          </Link>
        
      </div>
      {error&&<p className='text-red-600'>Wrong Credentials</p> }
      </container>
  )
}
export default SignIn