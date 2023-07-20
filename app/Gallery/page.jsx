import React from 'react'
import Tattoos from '../components/tattoos/Tattoos'

async function fetchTattoos() {
  const res = await fetch('http://localhost:3000/api/tattoes', 
  {
    cache: "no-store",
  }
  )
  const data = await res.json()
  return data
}

async function Gallery() {
  const data = await fetchTattoos();


  
  console.log("datas",data);
  return (
    <div className="justify-items-center">
      <h1 className="text-4xl font-bold mb-8 text-center">Tattoos</h1>
        {await <Tattoos data = {data}/>}
    </div>
  )
}

export default Gallery