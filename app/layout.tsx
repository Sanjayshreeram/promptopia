import React from 'react';
import '@styles/globals.css';

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
        <div className='main'>
          <div className='gradient'/>

          </div>
          <main className='app'>
            {children}
          </main>

       
    </body>
   </html>
  )
}

export default Layout;