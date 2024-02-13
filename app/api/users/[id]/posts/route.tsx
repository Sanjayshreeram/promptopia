import { connectToDatabase } from '@utils/database';

//for fetching post of specific user in their profile section

import Prompt from "@models/prompt";

export const GET=async (req:any,{params}:any)=>{
  

    try{
        await connectToDatabase();

        const post=await Prompt.find({creator:params.id}).populate('creator');

        return new Response(JSON.stringify(post),{status:200});
    }
    catch(error){
        return new Response("Failed to fetch post",{status:500});
    }
}




