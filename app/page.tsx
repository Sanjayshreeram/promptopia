"use client"
import React from 'react';
import Feed from '@components/Feed';

const Home = () => {

  
  
  return (
    <section className='w-full  flex flex-col flex-center'>
<h1 className='head_text text-center'>
  Discover & Share
  <br className='max-md:hidden'/>
  <span className='orange_gradient'>
    AI-POWERED PROMPTS
  </span>
</h1>
<p className='desc text-center'>
  Promptopia is a place to discover and share prompts for writing, drawing, and more.
</p>
<Feed/>



    </section>
  )
}

export default Home