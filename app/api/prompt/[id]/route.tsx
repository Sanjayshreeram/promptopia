import { connectToDatabase } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (req:any,{params}:any) => {
    console.log("Fetching all prompts");
    try {
        await connectToDatabase();
        const prompt = await Prompt.findById(params.id).populate('creator');
          if(!prompt){
            return new Response("Prompt not found",{status:404})
          
          }


        return new Response(JSON.stringify(prompt), { status: 200 });
    } catch (error) {
        return new Response("Failed to fetch all prompts", { status: 500 });
    }
};


export const PATCH=async (req:any,{params}:any)=>{

    const {prompt,tag}=await req.json();

    try{
         await connectToDatabase();
  
         const  existingPrompt=await Prompt.findById(params.id);
         if(!existingPrompt){
           return new Response("Prompt not found",{status:404})
         }

         existingPrompt.prompt=prompt;
            existingPrompt.tag=tag;

            await existingPrompt.save();
            return new Response(JSON.stringify(existingPrompt),{status:200})
    }
    catch(error){
        return new Response("Failed to update prompt",{status:500})

    }



    
}
export const DELETE=async (req:any,{params}:any)=>{
    try{
        await connectToDatabase();
        const prompt=await Prompt.findById(params.id);
        if(!prompt){
          return new Response("Prompt not found",{status:404})
        }
        await prompt.remove();
        return new Response(JSON.stringify(prompt),{status:200})
    }
    catch(error){
        return new Response("Failed to delete prompt",{status:500})
    }   
}
