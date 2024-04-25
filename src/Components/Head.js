import React from 'react'
import { menu, user_icon, youtube_logo } from '../utils/Constants'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'

const Head = () => {

  const dispatch = useDispatch()
  const toggleMenuHandler = ()=>{
    dispatch(toggleMenu())
  }
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
        <div className='flex col-span-1 justify-between'>
            <img onClick={()=>toggleMenuHandler()} className="h-8 cursor-pointer" alt="menu" src={menu}/>
            <a href="/">
            <img className="h-12 mx-2 mt-[-5px]" alt="youtube-logo" src={youtube_logo}/></a>
        </div>
        <div className='col-span-10 px-10'>
            <input className="w-1/2 border border-gray-400 p-2 rounded-l-full" type="text"/>
            <button className='border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100'>🔍</button>
        </div>
        <div className='col-span-1'>
            <img className="h-8" alt="user-icon" src={user_icon}/>
        </div>
    </div> 
  )
}

export default Head
