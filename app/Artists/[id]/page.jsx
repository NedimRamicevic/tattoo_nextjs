// dynamic route: /artists/:id/page
// Path: app\Artists\[id]\page.jsx

import React from 'react'
import Image from 'next/image'


async function fetchArtist(id) {
    const res = await fetch(`http://localhost:3000/api/artists/`,
    {
        cache: "no-cache",
    }
    )
    const data = await res.json()
    const artist = data.find((artist) => artist._id === id)
    return artist;
    }


async function ArtistPage({ params}) {
    const artist = await fetchArtist(params.id)
    return (
        <div className="bg-white mx-16">
            <div className="mx-auto max-w-2xl pt-24 px-4 sm:pt-32 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="grid grid-cols-1 items-center gap-y-16 gap-x-8 lg:grid-cols-2">
                    <div className="lg:ml-[30%]">
                        <div className="pb-10 sm:-mr-14">
                            <h2 className="font-medium text-gray-500 mb-5">Resident</h2>
                            <p className="termina artist-name z-10 relative flex justify-center mt-2 text-4xl font-bold text-gray-900 sm:text-5xl sm:pl-24">{artist.name} </p>
                        </div>
                        <div className="mt-0 sm:mt-10 space-y-10">
                            <dt className="font-medium text-gray-900">About</dt>
                            <dd className="termina mt-3 text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus repellat dolor architecto? Et itaque, adipisci ea laboriosam sit eaque, quod quos consequuntur voluptates nobis, est eum autem! Consequuntur, illo deleniti. </dd>
                        </div>
                    </div>
                    <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 drop-shadow-xl">
                        <img className="h-full w-full object-cover object-center" src={artist.photo} alt="artist" />
                    </div>
                </div>
            </div>
        </div>
                
    )
}





export default ArtistPage
