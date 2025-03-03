import React from 'react'
import Image from 'next/image'

const EduCard = () => {
    

  return ( 
 
    <>
   <section className="bg-white px-40 m-10">
     <div className="text-center p-20 shadow-lg">
       <Image src="/usjlogo.png" alt="USJ LOGO" width={100} height={100}className="mx-auto block"/>
       <h4 className="font-semibold text-2xl mt-10">University of Sri Jayewardenepura</h4>
       <h6 className='font-medium text-secondary mt-5'>Bsc.in Physical Science and ICT</h6>
       <p className='text-accent font-medium mt-2'>GPA: 2.9999</p>
        
     </div>
    </section>
    
    </>
    
  )
}

export default EduCard
