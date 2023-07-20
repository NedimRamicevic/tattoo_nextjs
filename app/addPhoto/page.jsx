// a from that accepts a url and tattoo_type and saves it to the database

// Path: app\api\tattoes\new\route.jsx
"use client"
import { useState } from "react";

const NewTattoo = () => {
    const [url, setUrl] = useState("");
    const [tattoo_type, setTattoo_type] = useState("");

    const submitData = async (e) => {
            e.preventDefault();
            try {
                await fetch("/api/tattoes/new", {
                    method: "POST",
                    body: JSON.stringify(
                        {url: url, tattoo_type: tattoo_type}
                    ),
                });
                setUrl("");
                setTattoo_type("");
            }
            catch (error) {
                console.error("naber",error);
            }
    }
        return(

            <div className="flex flex-col items-center justify-center">
                <form onSubmit={submitData} className="flex flex-col items-center justify-center">
                    <input
                        className="border border-gray-400 p-2 text-black rounded-lg m-2"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="url"
                    />
                    <input
                        className="border border-gray-400 p-2 text-black rounded-lg m-2"
                        value={tattoo_type}
                        onChange={(e) => setTattoo_type(e.target.value)}
                        placeholder="tattoo_type"
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