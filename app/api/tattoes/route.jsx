import { NextResponse } from "next/server";
import connectDB from "../../../utils/database";
import Photo from "../../../models/photo";

export const GET = async (request) => {
  try {
    await connectDB();
    const photos = await Photo.find();
    console.log("photos", photos);
    return new NextResponse(JSON.stringify(photos));
  } catch (error) {
    console.log("Error getting tattoo: ", error);
  }
};
