import Artists from "../components/artists/Artists";

async function fetchArtists() {
  const res = await fetch('http://localhost:3000/api/artists',
  {
    cache: "no-store",
  }
  )
  const data = await res.json()
  console.log( "artists",data)
  return data;
}

async function ArtistsPage() {
  const data = await fetchArtists()
  return (
    
    <Artists data={data} />

  )
}

export default ArtistsPage