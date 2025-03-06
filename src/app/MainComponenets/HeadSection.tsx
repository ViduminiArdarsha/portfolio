import React from 'react'
import Image from 'next/image'

const HeadSection = () => {
  return (
    <section className="flex justify-center gap-20 mt-20 px-20">
       <div className="text-center">
         <h1 className="font-semibold text-7xl m-8 text-accent"> Vidumini Ardarsha</h1>
         <h2 className="font-normal text-2xl m-8 text-secondary">Fresh Undergraduate | Aspiring UI/UX Designer</h2>
         
       </div>
       
       <div className="relative my-auto bg-gradient-to-b from-accent rounded-full w-40 h-40 overflow-hidden">
         <Image src="/profilePhoto.jpg"
         alt="Profile Picture"
        layout="fill"
        objectFit="cover"
         />
       </div>  
     </section>
  )
}

export default HeadSection
