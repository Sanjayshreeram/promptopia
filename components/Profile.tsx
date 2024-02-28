import React from 'react';
import PromptCard from './PromptCard';

const Profile = ({name,desc,data,handleEdit,handleDelete}:any) => {
  console.log("the data is " ,data);
  return (
    <section className='w-full'>
      <h1 className='head_text text-left'>
       <span>
       {name}
        </span>  Profile
      </h1>
      <p className='desc text-let'>
        {desc}
      </p>
      <div className='mt-16 prompt_layout'>
      {data.map((post: any) => (
        <PromptCard
          key={post.id}
          post={post}
          handleEdit={()=>handleEdit && handleEdit(post)}
          handleDelete={()=>handleDelete && handleDelete(post)}
        />
      ))}
    </div>
    </section>
  )
}

export default Profile