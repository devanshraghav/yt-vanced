import React from 'react'

const Button = (props) => {
  return (
    <div>
        <button className='bg-gray-200 px-3 py-1 m-4 rounded-md'>{props.name}</button>
    </div>
  )
}

export default Button;