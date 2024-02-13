"use client"
import React from 'react';
import { useState,useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { usePathname,useRouter } from 'next/navigation';

import Profile from '@components/Profile';
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
const page = () => {
  return (
   <Profile name="My" desc="Welcome to your personlised profile page" data={[]} handleEdit={handleEdit} handleDelete={handleDelete} {this.props.first}/>
  )
}

export default page
