import { connectToDatabase } from "@utils/database";
export const POST=async (req:any)=>{
    const {userId,prompt,tag}= await req.json();

    try{
        await connectToDatabase();
         
    }
    catch(error){
        
    }
    
}