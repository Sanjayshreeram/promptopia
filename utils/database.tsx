import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async (): Promise<void> => {
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log("Already connected to database");
        return;
    }

    const mongoDbUrl: string = process.env.MONGODB_URL || " " ;

    try {
        await mongoose.connect(mongoDbUrl, {
            dbName: "share_prompt",
          
          
        });

        isConnected = true;
        console.log("Connected to database");
    } catch (error) {
        console.error("Failed to connect to the database", error);
    }
};
