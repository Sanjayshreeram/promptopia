"use client"
import React from 'react';
import { useState,useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { usePathname,useRouter } from 'next/navigation';

import Profile from '@components/Profile';
import { set } from 'mongoose';

const Myprofile = () => {
    const [Post, setPost] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const { data: session } = useSession();
  


    const handleEdit = (post: any) => { " Edit <post></post>"}

        const handleDelete = (post: any) => { "// Delete <post></post>}"  }

    useEffect(() => {
        const fetchPost = async () => {
            try { 
                
                const data = await fetch(`/api/users/${session?.user?.id}/posts`);
                console.log("data", data);
                const res = await data.json();
                setPost(res);
                setLoading(false); // Set loading to false after data is fetched
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false); // Set loading to false even if there's an error
            }
        };

        fetchPost();
    },[] );

    return (
      
        <div>
            {loading ? 
                (<p>Loading...</p> )
             : (
                <Profile name="My" desc="Welcome to your personalized profile page" data={Post} handleEdit={handleEdit} handleDelete={handleDelete} />
            )}
        </div>
    );
};

export default Myprofile;
