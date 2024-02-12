"use client";


import Link from 'next/link'
import Image from 'next/image'
import { useState,useEffect } from 'react'
import {signIn,signOut,useSession,getProviders} from 'next-auth/react'

const Nav = () => {
const {data:session}=useSession();
// {alert(session?.user)}
    const [providers,setproviders]=useState<any>(null);
    const [toggledropdown,settoggledropdown] = useState<boolean>(false);


    useEffect(()=>{
        const set=async()=>{
            const response=await getProviders();
            setproviders(response);
        }
        set();

    },[])
  return (
   <nav className='flex-between w-full mb-16 pt-3'>
    <Link href="/" className='flex gap-2 flex-center'>
        <Image src='/assets/images/logo.svg' alt="Promptopia Logo" width={30} height={30} className='object-contain'/>
    <p className='logo_text uppercase'>
        Promptopia
    </p>
    </Link>
    {/* {desktop navigation } */}
    <div className='sm:flex hidden'>
        {session?.user ?(

            <div className='flex gap-3 md:gap-5'>
                <Link href="/create-prompt" className='black_btn'>
                Create Post
                </Link>
                <button type='button' onClick={()=>signOut({callbackUrl:'http://localhost:3000/'})} className='outline_btn'>
                    Sign Out
                </button>
                <Link href="/profile" className='flex gap-2 flex-center'>
                    <Image src={session?.user.image || ''} alt="Profile" width={35} height={35} className='rounded-full'/>
                    <p className='logo_text uppercase'>
                        Profile
                    </p>
                    </Link>

                </div>
        ):
        (
            <>
            {
                providers && Object.values(providers).map((provider:any)=>(

           <button type='button' key={provider.name} onClick={()=>signIn(provider.id)} className='black_btn'>
        Sign In
           </button>

                ))
            }


            </>
        )

        }

    </div>
   
     {/*
      {mobile navigation} hidden from small screen visible only on xs  */}
    <div className='sm:hidden flex relative'>
        {session?.user ?
        
           (
            <div className='flex'>
                                <Image src={session?.user?.image||' '} alt="User Icon" width={35} height={35} className='rounded-full' onClick={()=>settoggledropdown((prev:boolean)=>!prev)}/>

                                {
                    toggledropdown && (

                        <div className='dropdown'>
                            <Link href="/profile" className='dropdown_link' onClick={()=>settoggledropdown(false)}>
                            
                            My Profile
                            </Link>
                            <Link href="/create-prompt" className='dropdown_link' onClick={()=>settoggledropdown(false)}>
                            
                            Create Prompt
                            </Link>
                            <button type='button' className='mt-5 w-full black_btn' onClick={()=>{settoggledropdown(false); signOut();}}>
                               Sign Out
                            </button>
                        

                        </div>
                    )
                }
                </div>

             

           )

           :(
            
            <>
            {
                providers && Object.values(providers).map((provider:any)=>(

           <button type='button' key={provider.name} onClick={()=>signIn(provider.id)} className='black_btn'>
        Sign In
           </button>

                ))
            }


            </>
           )
        
    }

    </div>

   </nav>
  )
}

export default Nav