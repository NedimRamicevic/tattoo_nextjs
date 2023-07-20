import { NextResponse } from "next/server";
import connectDB from "../../../utils/database";
import Artist from "../../../models/artist";

export const GET = async (request) => {

    try {
        await connectDB();
        const artists = await Artist.find();
        console.log("artists", artists);
        return new NextResponse(JSON.stringify(artists));
    } catch (error) {
        console.log("Error getting artist: ", error);
    }
    }