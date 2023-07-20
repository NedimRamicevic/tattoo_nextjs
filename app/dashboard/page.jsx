import React from 'react'
import { useSession } from 'next-auth/client'

function AdminDashboard() {
    const [ session, loading ] = useSession()
    if(session){
        return (
            <div className="flex justify-center">
                <h1>Admin Dashboard</h1>
            </div>
        )
    }else{
        return (
            <div className="flex justify-center">
                <h1>Not Authorized</h1>
            </div>
        )
    }
}

export default AdminDashboard