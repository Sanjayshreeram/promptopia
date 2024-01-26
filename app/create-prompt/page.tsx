"use client";
import React from 'react';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';


import Form from '@components/Form';

const CreatePrompt = () => {

    const [submitting,issubmitted] = useState<boolean>(false); 
    const [post, setPost] = useState({
        prompt: "",
        tag: "",
    });

    const CreatePrompt= async (e)=>{
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
            issubmitted(false);
            const json=await res.json();
            if(!res.ok){
                throw Error(json.message);
            }
            alert('prompt created successfully');
            router.push('/');
        }




    }
  return (
   <Form type="Create" post={post} setPost={setPost} submitting={submitting} handlesubmit={CreatePrompt}>



   </Form>
  )
}

export default CreatePrompt;