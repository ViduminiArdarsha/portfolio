import useSWR from "swr";
import navbar from "./Components/navbar";
import Image from 'next/image';


export default function Home() {
  return (
    <>
    <main>
      <title>My Portfolio</title>

     <navbar/> 
     <section className="flex justify-center gap-40 pt-4 px-20">
       <div className="text-center">
         <h1 className="font-semibold text-5xl m-8 text-primary"> Vidumini Ardarsha</h1>
         <h2 className="font-semibold text-7xl m-8 text-accent pt-8">UI/UX Designer</h2>
       </div>
       <div>
         <Image src="/profilePhoto.jpg"
         alt="Profile Picture"
         width={150}
         height={150}
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
