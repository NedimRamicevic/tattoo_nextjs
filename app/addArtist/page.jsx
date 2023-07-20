// a from that accepts a url and tattoo_type and saves it to the database

// Path: app\api\tattoes\new\route.jsx
"use client"
import { useState } from "react";

const NewTattoo = () => {
    const [url, setUrl] = useState("");
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");

    const submitData = async (e) => {
            e.preventDefault();
            try {
                await fetch("/api/artists/new", {
                    method: "POST",
                    body: JSON.stringify(
                        {photo: url, name: name, desc: desc}
                    ),
                });
                setUrl("");
                setName("");
                setDesc("");
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
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="name"
                    />
                    <input
                        className="border border-gray-400 p-2 text-black rounded-lg m-2"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        placeholder="description"
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