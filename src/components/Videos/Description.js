import React from 'react'

const Description = (props) => {
    const {description,views} = props;
    console.log(description,views);
  return (
    <div >
        <div className='bg-gray-200 rounded-lg'>
        <h1>{views} views</h1>
        <p>{description}</p>
        </div>

    </div>
  )
}

export default Description;