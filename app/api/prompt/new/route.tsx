import { connectToDatabase } from "@utils/database";
import Prompt from "@models/prompt"; 
//this will get data sent on localhost 3000 and retrieve info from the server and save it to the database

export const POST=async (req:any)=>{
    const {userId,prompt,tag}= await req.json(); //extracting data from backend

    try{
        await connectToDatabase(); //connect to database

        const newprompt=new Prompt({

            creator:userId,
            prompt,
            tag

  
        })  //creating a new prompt using old


        await newprompt.save();

        return new  Response(JSON.stringify(newprompt),{status:201})
          
         
    }
    catch(error){
        return new Response("Failed to create a new prompt",{status:500})
        
    }
    
}