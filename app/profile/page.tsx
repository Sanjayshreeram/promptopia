"use client"
import React from 'react';
import { useState,useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { usePathname,useRouter } from 'next/navigation';

import Profile from '@components/Profile';
import { set } from 'mongoose';
import { Session } from 'inspector';
interface Props {
    name: string,
    desc: string,
    data: any[],
    handleEdit: any,
    handleDelete: any

}

const handleEdit = (id: string) => {
    console.log("Edit", id)
}
const handleDelete = (id: string) => {
    console.log("Delete", id)
}

const [Post,setpost]=useState<any[]>([]);
const Myprofile = () => {

    const {data:session}=useSession();

    useEffect(()=>{

        const fetchpost=async()=>{
            const data=await fetch(`/api/prompt/${session?.user?.id}/posts`);
            const res=await data.json();

            setpost(res);






        }
        if(session?.user?.id)
          fetchpost();



    },[])
  return (
   <Profile name="My" desc="Welcome to your personlised profile page" data={Post} handleEdit={handleEdit} handleDelete={handleDelete} {this.props.first}/>
  )
}

export default Myprofile
