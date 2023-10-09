import React from 'react'
import { useSelector } from 'react-redux'
import { useRef } from 'react'
import {getDownloadURL, getStorage,ref, uploadBytesResumable} from 'firebase/storage'
import { useState,useEffect } from 'react'
import {app} from '../firebase'

const Profile = () => {
  const {currentUser}=useSelector((state)=>state.user)
  const fileRef=useRef(null)
  const [file,setFile]=useState(undefined)
  const [filePerc,setFilePerc]=useState(0)
  const [fileError,setFileError]=useState(false)
  const [formData,setFormData]=useState({})
  console.log(formData)
  
  console.log(file)
  useEffect(()=>{
    if(file){
      handelFileUpload(file)
    }
  }, [file])

  const handelFileUpload=(file)=>{
    console.log(file)
    const storage=getStorage(app)
    const fileName=new Date().getTime() + file.name;
    const storageRef= ref(storage,fileName)
    const uploadTask=uploadBytesResumable(storageRef,file)
    
    

    uploadTask.on('state_changed', 
    (snapshot) =>{
      const progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100
      setFilePerc(Math.round(progress))
      console.log(filePerc)
            
    } ,
    (error)=>{
      if(error){

        setFileError(true)
      }
    },
    ()=>{
      getDownloadURL(uploadTask.snapshot.ref).then
      ((downloadURL)=>{
        setFileError(false)
        setFormData({...formData,avatar:downloadURL})
      })
    })
    console.log(`formData ${formData}`)

  }
  return (
    <div className='p-3 max-w-lg mx-auto'>

      
      <h1 className='text-3xl font-semibold text-center my-8'>
         Profile
        </h1>
        <form className=' flex flex-col gap-4'>
          <input onChange={(e)=>setFile(e.target.files[0])}
           accept='image/*' ref={fileRef} hidden type="file" name="" id="file" />
          <img onClick={()=>fileRef.current.click()} className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2' src={formData.avatar||currentUser.avatar} alt="Profile" />
          <p className='text-small self-center'>
          {fileError?(<p className='justify-center text-red-700'>Error while uploading file and Image must be less then 2 MB</p>)
          :filePerc > 0 && filePerc < 100 ? (
           <span className='text-slate-700'>

             {`Uploading ${filePerc}%`}

           </span>
          ): filePerc===100 ?(

            <p className=' text-green-700'>File Successfully Uploaded</p>
          ): (' ')}

          </p>
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