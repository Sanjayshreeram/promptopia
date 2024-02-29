"use client"
import React from 'react'
import { useState,useEffect } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { usePathname,useRouter } from 'next/navigation';





const PromptCard = ({post,handleTagClick,handleEdit,handleDelete}:any) => {
  // console.log(post.creator);
  const [copied,setcopied]=useState<string>("")
  const { data: session } = useSession();
  const { pathName }:any = usePathname();
  const router=useRouter();
  console.log("session is ",session)

  const copy=()=>{

    setcopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(()=>setcopied(""),5000)
  }

  return (

    <div className='prompt_card'>

      <div className='flex justify-between items-start gap-5'>
        <div className='flex-1 flex justify-start items-center gap-3 cursor-pointer'>
        <Image src={post?.creator?.image||"/assets/images/user.svg"}
         alt="user_image"
         width={40}
         height={40}
         className='rounded-full object-contain'

        />
        <div className='flex flex-col'>
          <h3 className='font-semibold font-sans text-gray-900'>
            { post?.creator?.username||'Anonymous'}
          </h3>
          <p className='font-inter text-sm text-gray-500'>
            {post?.creator?.username||'Anonymous'}
          </p>

        </div>
        </div>
        <div className='copy_btn' onClick={copy}>
          <Image alt="image" src={copied===post.prompt?'/assets/icons/tick.svg':'/assets/icons/copy.svg' } height={12} width={12}/>

        </div>

      </div>
      <p className='my-4 font-satoshi text-sm text-gray-700'>
      {post.prompt}

      </p>
      <p className='font-inter text-sm blue_gradient cursor-pointer '>
      {post.tag}
      </p>
      {session?.user?.id===post?.creator?._id && pathName==='/profile' &&(
        <div className='flex justify-end gap-5'>
          <p className='font-inter text-sm green_gradinet text-black cursor-pointer' onClick={handleEdit}>
            Edit
          </p>
          <p className='font-inter text-sm orange_gradinet cursor-pointer' onClick={handleDelete}>
            Edit
          </p>
          </div>

      ) }
      </div>
      
    
  )
}

export default PromptCard