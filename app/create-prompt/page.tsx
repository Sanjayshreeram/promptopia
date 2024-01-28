"use client";
import React from 'react';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Form from '@components/Form';

const CreatePrompt = () => {
    const router=useRouter();
    const {data:session}=useSession();

    const [submitting,issubmitted] = useState<boolean>(false); 
    const [post, setPost] = useState({
        prompt: "",
        tag: "",
    });

    const CreatePrompt= async ()=>{
        e.preventDefault();

        issubmitted(true);

        try{
            const res=await fetch('/api/prompt/new',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    prompt:post.prompt,
                    userId:session?.user.id,
                    tag:post.tag,
                

                })
               
            })
            
            const json=await res.json();
            if(!res.ok){
                throw Error(json.message);
            }
            alert('prompt created successfully');
            router.push('/');
        }

        finally{
            issubmitted(false);

        }




    }
  return (
   <Form type="Create" post={post} setPost={setPost} submitting={submitting} handlesubmit={()=>CreatePrompt}>



   </Form>
  )
}

export default CreatePrompt;