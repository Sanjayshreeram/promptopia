"use client"
import React, { useState, useEffect } from 'react';


const Feed = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const prompts = await fetch('/api/prompt');
        const data=await prompts.json();
        setData(data);
      } catch (error) {
        console.error('Error fetching prompts:', error);
      }
    }

    fetchData();
  }, []);

  return (

    <div>
      <input className='w-92 h-12'>
      </input>
        <div>
      {data.map((item) => (
        <div key={item.id}>
          <h1>{item.prompt}</h1>
        </div>
      ))}
    </div>

    </div>
  
  );
};

export default Feed;
