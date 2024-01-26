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


    }
  return (
   <Form type="Create" post={post} setPost={setPost} submitting={submitting} handlesubmit={CreatePrompt}>



   </Form>
  )
}

export default CreatePrompt;