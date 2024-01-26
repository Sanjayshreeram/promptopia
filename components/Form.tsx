import React, { FormEvent, FormEventHandler } from 'react'







type props = {
  type: string;
  post: React.ReactNode;
  setPost: React.ReactNode;
  submitting: boolean;
  handlesubmit: FormEventHandler<HTMLFormElement>;
};

const Form = ({ type, post, setPost, submitting, handlesubmit }: props) => {
  return (
 <section className='w-full max-w-full flex-start flex-col'>
  <h1 className='head_text text-left'>
   <span className='blue_gradient'>
   {type} Post

    </span> 
    
  </h1>
  <p className='desc text-left max-w-md'>
    {type} and  Share amazing prompts with the world ,and let your imagination run wild with any AI-powered platform of your choice.

  </p>
  <form onSubmit={handlesubmit} className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'>
  <label>
  <span className='font-semibold font-satoshi text-base text-gray-700'> YOUR AI-Prompt</span>
    <textarea value={post?.prompt|| ''} onChange={(e)=>setPost({...post,prompt:e.target.value})} placeholder='write your prompt here' className='form_textarea'>

    </textarea>
  </label>
  <label>
    Tag { ` `}
  <span className='font-semibold font-satoshi text-base text-gray-700'> (#product,#webdevelopment,#idea)</span>
    <input  value={post?.tag|| ''} onChange={(e)=>setPost({...post,prompt:e.target.value})} placeholder='#Tag' required className='form_input'>

    </input>
  </label>
  </form>
 </section>
  );
};

export default Form;
