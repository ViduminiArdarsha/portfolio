import React from 'react'
import EduCard from './EduCard'

const AboutMe = () => {
  return (
    <>
        <section className="p-40 m-10">
            <div>
                <h3 className="text-3xl text-accent font-semibold">About Me</h3>
                <p className="text-secondary pt-10">I am currently an undergraduate at the University of Sri Jayewardenepura. I am passionate on <span className="text-accent font-medium">UX designing</span> and <span className="text-accent font-medium">Human Computer Interaction.</span> More over I have done several projects regarding Web Development, Data Analysis and Embedded Systems.</p>
            </div>
        </section>
        <EduCard/>
    </>
    
  )
}

export default AboutMe
