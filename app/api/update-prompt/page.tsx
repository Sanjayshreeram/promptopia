"use client";
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter,useSearchParams } from 'next/navigation';
import Form from '@components/Form';
import Link from 'next/link'; // Import Link component


const EditPrompt = () => {
    console.log('called edit');
    const router = useRouter();
   
    const searchparams=useSearchParams();
    const promptId:any=searchparams.get('id');

    const [submitting, setSubmitting] = useState<boolean>(false); 
    const [post, setPost] = useState({
        prompt: "",
        tag: "",
    });

    useEffect(()=>{
        const getpromptdetails=async ()=>{
            const res:any=await fetch(`/api/prompt/${promptId}`);
            const data:any=await res.json();

            setPost({prompt:data.prompt,
                tag:data.tag
      
      })

        }



       
        if(promptId)
        getpromptdetails();


    },[promptId])

    const meesage=(s:any)=>{
        console.log('logged',s);
    }

    // const handleCreatePrompt = async (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
        // setSubmitting(true);
        // //this will fetch data from ->api->prompt->new

        // try {
        //     const res = await fetch('/api/prompt/new', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify({
        //             prompt: post.prompt,
        //             userId: session?.user?.id, // Use optional chaining to safely access 'id' property
        //             tag: post.tag,
        //         })
    //         });

    //         const json = await res.json();
    //         if (!res.ok) {
    //             throw Error(json.message);
    //         }
    //         alert('Prompt created successfully');
    //         router.push('/');
    //     } finally {
    //         setSubmitting(false);
    //     }
    // };

    return (
        <Form
            type="Edit"
            post={post}
            setPost={setPost}
            submitting={submitting}
            handleSubmit={async (e: React.FormEvent<HTMLFormElement>) => { 
                e.preventDefault();
                console.log("Form submitted"); 
            }}
        />
    );
}

export default EditPrompt;
