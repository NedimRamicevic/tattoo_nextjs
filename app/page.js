import React from "react";
import Banner from "./components/banner/Banner";
import Tattoos from "./components/tattoos/Tattoos";
import ArtistsPage from "./Artists/page";

async function fetchTattoos() {
  const res = await fetch("http://localhost:3000/api/tattoes", {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
}

async function Home() {
  const tattoos = await fetchTattoos();
  return (
    <div className="flex flex-col w-full">
      <Banner />
      <Tattoos data={tattoos} />
      <ArtistsPage />
    </div>
  );
}

export default Home;
