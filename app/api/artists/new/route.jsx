import Artist from "../../../../models/artist";
import connectDB from "../../../../utils/database"

export const POST = async (req) => {
    const {name, desc, photo} = await req.json();

    try {
        await connectDB();
        const artist = new Artist({
            name,
            desc,
            photo
        });
        await artist.save();

        return new Response(JSON.stringify(artist), {status: 201});
    } catch (error) {
        console.log(error);
    }
}