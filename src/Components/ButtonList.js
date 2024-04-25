import React from 'react'
import Button from './Button'

const list = ["All","Music","Mixes","T-Series","Java","Arijit Singh","C++","Startup Company","Computers and Information Technology","Live","Stocks"]

const ButtonList = () => {
  return (
    <div className='flex'>
      {list.map((element)=>(
        <Button name={element}/>
    ))}
    </div>
  )
}

export default ButtonList
