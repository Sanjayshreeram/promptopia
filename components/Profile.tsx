import React from 'react'

const Profile = ({name,desc,data,handleEdit,handleDelete}:any) => {
  return (
    <section className='w-full'>
      <h1>
        {name} Profile
      </h1>
    </section>
  )
}

export default Profile