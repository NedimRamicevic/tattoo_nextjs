import connectDB from "../../../../utils/database";
import Photo from "../../../../models/photo";

export const DELETE = async (request) => {
    const { id } = request.query;
    try {
        await connectDB();
        const photo = await Photo.findByIdAndDelete(id);
        console.log("photo", photo);
        return new Response(JSON.stringify(photo), { status: 200 });
    } catch (error) {
        console.log("Error getting tattoo: ", error);
    }
    }