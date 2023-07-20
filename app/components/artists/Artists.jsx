import React from 'react'
import Image from 'next/image'


async function Artists({data}) {
  
  return (
    
<div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24 ">
  <div className="space-y-12">
    <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
    <h1 className="termina text-white text-5xl font-light sm:text-6xl">Artists</h1>
    </div>
    <div className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">

    {await data.map((artist) => (
      <div className="group space-y-4 cursor-pointer ">
        <div className="flex justify-end">
          <span className="inline-flex items-center rounded-md bg-gray-100 px-2.5 py-0.5 text-sm font-medium text-gray-800 absolute mt-1.5 z-10 opacity-70 group-hover:opacity-100 transition duration-250 ease-out cursor-pointer">Resident</span>
        </div>
          <div className='aspect-square overflow-hidden grayscale group-hover:grayscale-0 transition duration-250 ease-out group-hover:ease-in'>
          <Image className="rounded-lg object-cover shadow-lg" src={artist.photo} alt="" width={400} height={400} />
          </div>
     
      <div className=" space-y-1">
              
         <h5 className="termina text-white text-2xl font-semibold">
                  {artist.name}
              </h5>

          <p className="termina text-slate-300 text-sm line-clamp-5">
              {artist.desc}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nemo non quaerat illum tempore! Perferendis quis officiis, porro veritatis consequatur quae animi in aperiam officia quia? Consectetur eaque doloribus possimus.
          </p>
      </div>
  </div>
    ))}
    </div>
    </div>
</div>

  )
}

export default Artists