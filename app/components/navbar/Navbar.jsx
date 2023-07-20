"use client"

import Container from "../Container"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
import { useSession } from "next-auth/react"
import { signOut } from "next-auth/react"



const Navbar = () => {

  const { data: session, status } = useSession();
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(
      (prev) => !prev
    )
  }

  return (
    <div className="w-full shadow-sm">
        <div className="p-8 flex flex-row justify-between text-2xl">
            <div className="nav_container flex w-3/4 md:w-1/5 flex-row justify-center items-center ">
            <div className="nav_items ">
              <Link href="/">ISTANBUL</Link>
              </div>
            </div>
            
            <div className="nav_container w-2/5 hidden md:flex md:flex-row justify-around items-center">
              <div className="nav_items hover:bg-gray-700 rounded-lg p-2">
                <Link href="/About">About</Link>
              </div>
              <div className="nav_items hover:bg-gray-700 rounded-lg p-2">
              <Link href="/Gallery">Gallery</Link>
              </div>
              <div className="nav_items hover:bg-gray-700 rounded-lg p-2">
              <Link href="/Artists">Artists</Link>
              </div>
            </div>
            <div className="nav_container hidden md:flex md:flex-row px-2 ">
              
              {session ? (
              <div className="border rounded-full px-2 py-3 hover:bg-gray-700 w-max" onClick = {()=> signOut()} >
                Sign Out
              </div>) : ( 
                <div className="border rounded-full px-2 py-3 hover:bg-gray-700 w-max" >
                <Link href="/api/auth/signin">BOOK APPOINTMENT</Link>
              </div>)
              }
            </div>
            <div className="md:hidden flex-col w-1/4 justify-center flex  ">
              <div className=" justify-center flex " onClick={toggleMenu}>
                <Image src="/icons/logo.svg" width={50} height={50} className=" rounded-full"/>
              </div>
              <div>
              {showMenu ? (
                <div className="flex flex-col absolute shadow-xl right-2 bg-gray-600 rounded-xl top-22 w-[40vw]">
                  <div className="nav_items transition hover:bg-gray-700 rounded-lg p-2">
                    <Link href="/Booking" onClick={toggleMenu}>Book Appointment</Link>
                  </div>
                  <div className="nav_items hover:bg-gray-700 rounded-lg p-2 ">
                    <Link href="/About" onClick={toggleMenu}>About</Link>
                  </div>
                  <div className="nav_items hover:bg-gray-700 rounded-lg p-2">
                  <Link href="/Gallery" onClick={toggleMenu}>Gallery</Link>
                  </div>
                  <div className="nav_items hover:bg-gray-700 rounded-lg p-2">
                  <Link href="/Artists" onClick={toggleMenu}>Artists</Link>
                  </div>
                </div>
              ) : (
                <div></div>
              )}
              </div>
              
            </div>
        </div>
    </div>
  )
}

export default Navbar