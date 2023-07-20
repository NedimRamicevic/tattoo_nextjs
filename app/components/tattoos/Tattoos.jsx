"use client"
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'



function Tattoos({data}) {
  
 const [hovered, setHovered] = useState(false);
 console.log("data",data)

  return (
    
    <div 
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    className={`grid grid-cols-2 mt-12 md:grid-cols-3 transition-all duration-700 gap-y-11 ${hovered ? '' : ''}`}>
    {data ? (data.map((image, index) => {
      return (
        <div key={index} className={`gallery-image transition-all flex flex-col items-center`}>
          <Image
        
            className={`tattoo-image max-w-full h-auto rounded-md object-cover duration-1000 ${hovered ? (index)%2 == 0 ?' translate-y-36' : 'translate-y-28' : '' }`}
            key={index}
            src={image.url}
            alt="gallery"
            width={400}
            height={400}
          />
          
        </div>
      );
    })) : (<div>loading</div>) }
  </div>
  )
}

export default Tattoos