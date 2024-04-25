import React from 'react';
import Button from './Button';

const list = [
  "All", 
  "Music", 
  "Mixes", 
  "T-Series", 
  "Java", 
  "Arijit Singh", 
  "C++", 
  "Startup Company", 
  "Computers and Information Technology", 
  "Live", 
];

const ButtonList = () => {
  return (
    <div className='flex flex-wrap'>
      {list.map((element) => (
        <Button key={element} name={element} className="mr-2 mb-2" />
      ))}
    </div>
  );
}

export default ButtonList;
