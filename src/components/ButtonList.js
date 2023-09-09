import React from 'react'
import Button from './Button'

const list = ["All", "Music", "Movies", "Gaming", "Mixes", "BGMI","React", "Live", "Web Development", "Javascript","Lo-fi"];
const ButtonList = () => {
  return (
    <div className='flex'>
      {
        list.map((button,index)=><Button name={button} key={index}/>)
      }
    </div>
  )
}

export default ButtonList