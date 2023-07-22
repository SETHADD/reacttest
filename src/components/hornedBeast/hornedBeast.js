import React, { useState } from 'react';

import './hornedBeast.css'

export default function HornedBeast({title,imageUrl,description,click,allBeasts}) {

  const [like, setLike] = useState(0);




  return (
    <div className='content'>
        <h2>
        {description}
        </h2>
        <img src= {imageUrl} alt= {description} title= {title} onClick={()=>{click(allBeasts)}}/>
        <p>
        {title}
        </p>
        <div className='emoji'onClick={()=>setLike(like + 1)}>🤩:{like}</div>
    </div>
  )
}

