"use client"
import React from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

function AdminDashboard() {
    const {session, status } = useSession()
    if(status === 'loading') return <p>Loading...</p>
    if(status === 'unauthenticated') return <p>Access Denied</p>
    else{
        return (
            <div className="flex flex-col justify-center items-center py-14 gap-y-6">
                <h1 className="termina text-white text-2xl font-semibold">Admin Dashboard</h1>
                <div className=" border rounded-full px-2 py-3 hover:bg-gray-700 w-max">
                <Link href="/addArtist">Add Artist</Link>
                </div>
                <div className="border rounded-full px-2 py-3 hover:bg-gray-700 w-max">

                <Link href="/addPhoto">Add Photo</Link>
                </div>
            </div>
        )
    }
}

export default AdminDashboard