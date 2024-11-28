import { MongoClient } from "mongodb";

export async function dbConnect(){

    const client = await MongoClient.connect(
        "mongodb+srv://jaydevkalariya27:jkjk@blogs.mzb16bj.mongodb.net/?retryWrites=true&w=majority&appName=blogs"
    );
    
    return client
}
