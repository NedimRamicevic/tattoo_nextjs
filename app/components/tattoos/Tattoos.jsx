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
    className={`grid grid-cols-2 py-24 pb-40 md:grid-cols-3 bg-white transition-all gap-y-10`}>
    {data ? (data.map((image, index) => {
      return (
        <div key={index} className={`gallery-image transition-all flex flex-col items-center overflow-hidden `}>
          <Image
        
            className={`tattoo-image max-w-full h-auto rounded-md object-cover duration-2000 shadow-2xl drop-shadow-2xl ${!hovered ? (index)%2 == 0 ?' translate-y-52' : 'translate-y-32  ' : '' }`}
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