import React from 'react'
import Image from 'next/image'
import { BiAward } from 'react-icons/bi'

const EduCard = () => {
    

  return ( 
     <div className="text-center p-10 shadow-lg mt-10">
       <div className='flex flex-row gap-3 justify-center'>
          <BiAward className='text-accent text-4xl'/>
          <h2 className='text-accent font-medium text-3xl pb-10'>Education</h2>
       </div>
       
       <Image src="/usjlogo.png" alt="USJ LOGO" width={100} height={100}className="mx-auto block"/>
       <h4 className="font-semibold text-2xl mt-10">University of Sri Jayewardenepura</h4>
       <h6 className='font-medium text-secondary mt-5'>Bsc.in Physical Science and ICT</h6>
       <p className='text-accent font-medium mt-2'>GPA: 2.9999</p>
     </div>
     
  )
}

export default EduCard
