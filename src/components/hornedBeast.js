import React from 'react'

export default function hornedBeast({title,imageUrl,description}) {
  return (
    <div>
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
