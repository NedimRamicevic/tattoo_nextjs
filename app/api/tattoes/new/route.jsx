import Photo from "../../../../models/photo";
import connectDB from "../../../../utils/database"
export const POST = async (req) => {
    const {url, tattoo_type} = await req.json();

    try {
        await connectDB();
        const photo = new Photo({
            url,
            tattoo_type
        });
        await photo.save();

        return new Response(JSON.stringify(photo), {status: 201});
    } catch (error) {
        console.log(error);
    }
};
