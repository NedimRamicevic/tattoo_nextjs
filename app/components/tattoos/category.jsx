import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Category({tattoo_photos}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
    {tattoo_photos.map((image, index) => {
      return (
        <div key={index} className="gallery-image   ">
          <Link className='flex flex-col items-center justify-center' href={`/gallery/${image.type_id}`}  >
          <Image
            className="tattoo-image max-w-full h-auto rounded-md object-cover"
            key={index}
            src={image.url}
            alt="gallery"
            width={1000}
            height={1000}
          />
          <div className=
          ' caret-yellow-300 md:text-3xl p-2 tracking-wider' >{image.tattoo_type}</div></Link>
        </div>
      );
    })}
  </div>
  )
}

export default Category