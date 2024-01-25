import React from 'react';
import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';
import {getServerSession} from "next-auth/next"

export const metadata = {
    title: "promptopia",
    description:'discover and share prompts',
}


const Layout = ({children}:{
  children: React.ReactNode

}) => {
  return (
   <html lang='en'>

    <body>
      <Provider>
        <div className='main'>
          <div className='gradient'/>

          </div>
          <main className='app'>
            <Nav/>
            {children}
          </main>
          </Provider>

       
    </body>
   </html>
  )
}

export default Layout;