// a from that accepts a url and tattoo_type and saves it to the database

// Path: app\api\tattoes\new\route.jsx
"use client"
import { useState } from "react";
import {signIn } from "next-auth/react";

const NewTattoo = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const submitData = async (e) => {
            e.preventDefault();
            signIn("credentials", {
                email,
                password,
                
            });
    }
        return(

            <div className="flex flex-col items-center justify-center">
                <form onSubmit={submitData} className="flex flex-col items-center justify-center">
                    <input
                        className="border border-gray-400 p-2 text-black rounded-lg m-2"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        placeholder="email"
                    />
                    <input
                        className="border border-gray-400 p-2 text-black rounded-lg m-2"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                        placeholder="password"
                    />
                    <button
                        type="submit"
                        className="border border-gray-400 p-2 rounded-lg m-2"
                    >
                        Submit
                    </button>
                </form>
            </div>
        )

    }

export default NewTattoo;