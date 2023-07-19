import React from 'react'
import './hornedBeast.css'

export default function hornedBeast({title,imageUrl,description}) {
  return (
    <div className='content'>
        <h2>
        {description}
        </h2>
        <img src= {imageUrl} alt= {description} title= {title}>
        </img>
        <p>
        {title}
        </p>
        
    </div>
  )
}

