import React from 'react'
import Image from 'next/image'


async function Artists({data}) {
  
  return (
    
<div className=" justify-center  flex">
    {await data.map((artist) => (
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 justify-items-center">
      
          <div className='flex justify-center'>
          <Image className="rounded-t-lg flex justify-center" src={artist.photo} alt="" width={200} height={200} />
          </div>
     
      <div className="p-5 flex flex-col items-center ">
              
         <h5 className="mb-2 text-2xl font-bold tracking-tighttext-white">
                  {artist.name}
              </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {artist.desc}
          </p>
      </div>
  </div>
    ))}
</div>

  )
}

export default Artists