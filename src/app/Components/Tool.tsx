import React from 'react'
import Image from 'next/image'
import { BiAnchor } from 'react-icons/bi'

const Tool = () => {
  return (
    <div className='mt-20'>
        <div className="flex flex-row gap-4 justify-center">
                  <BiAnchor className="text-accent text-4xl" />
                  <h2 className="text-accent font-medium text-3xl pb-7">
                    Technologies
                  </h2>
                </div>
   
    <div className='mt-5'>
      <Image src="/ToolImages/figma.png"
      className='rounded-lg'
      alt="Figma Logo"
      width={80}
      height={80}/>
    </div>
    </div>
  )
}

export default Tool
