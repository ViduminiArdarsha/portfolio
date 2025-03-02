import useSWR from "swr";
import Navbar from "./Components/navbar";
import Image from 'next/image';
import { BiPhoneCall } from "react-icons/bi";


export default function Home() {
  return (
    <>
    <main>
      <title>My Portfolio</title>

     <Navbar/>
     <section className="flex justify-center gap-40 pt-4 px-20">
       <div className="text-center">
         <h1 className="font-semibold text-7xl m-8 text-accent pt-8"> Vidumini Ardarsha</h1>
         <h2 className="font-semibold text-5xl m-8 text-primary">UI/UX Designer</h2>
         <div className="border-2 border-accent rounded-lg px-6 py-3 text-accent flex justify-center w-30">
          <BiPhoneCall className="cursor-pointer text-2xl"/>
          <a href="#" className="ml-3">Contact Me</a>
         </div>
       </div>
       
       <div className="relative my-auto bg-gradient-to-b from-accent rounded-full w-40 h-40 overflow-hidden">
         <Image src="/profilePhoto.jpg"
         alt="Profile Picture"
        layout="fill"
        
         objectFit="cover"
         />
       </div>  
     </section>
        <a href="/projects">Projects</a>
     <section>

     </section>
   
    </main>
      
    </>
    
  );
}
