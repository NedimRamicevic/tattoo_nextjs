import { NextResponse } from "next/server";
import connectDB from "../../../utils/database";
import User from "../../../models/user";

export const GET = async (request) => {
    try {
        await connectDB();
        const users = await User.find();
        console.log("users", users);
        return new NextResponse(JSON.stringify(users));
    } catch (error) {
        console.log("Error getting users: ", error);
    }
    }
