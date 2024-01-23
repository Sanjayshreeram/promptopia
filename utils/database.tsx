import mongoose from "mongoose";


let isconnected :boolean= false;

export const connectToDatabase = async () => {

    mongoose.set('strictQuery',true)

  if (isconnected) {
    console.log("Already connected to database");
    return;
  }

  try{
    await mongoose.connect(process.env.MONGODB_URI, {
        dbName:"share_prompt",
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    isconnected=true;
    console.log("Connected to database");   
  }

  

//   console.log("Connected to database");
//   isconnected = db.connections[0].readyState;
catch(error)
{
    console.log(error);

}
};