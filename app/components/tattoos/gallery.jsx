// gallery is a component that displays a list of images
// it is used in the home page and the gallery page

import React from "react";
import Image from "next/image.js";
import logo from "/public/images/right-arrow.png";
import Photos from "./photos";
import Link from "next/link";

const Gallery = ({tattoo_photos,tattoo_types}) => {
  return (
    <div className="gallery px-12 flex flex-col justify-center items-center gap-10 mt-6 ">
      <div className="gallery-title text-center text-5xl tracking-wider">Selected Works</div>
      <Photos tattoo_photos={tattoo_photos} />
        <Link className=" h-[45px] mt-6 text-black bg-white flex-row flex justify-evenly items-center rounded-full w-[200px]" href={`/gallery`} >
        <div className="gallery-alltattoos-left text-xl tracking-wider">ALL TATTOOS</div>
        <Image className="gallery-nav-img h-[24px] w-[24px] mx-1" src={logo} alt="" /></Link>
      
    </div>
  );
};

export default Gallery;
