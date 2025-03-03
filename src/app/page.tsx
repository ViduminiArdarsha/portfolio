import useSWR from "swr";
import Navbar from "./Components/navbar";
import EduCard from "./Components/EduCard";
import HeadSection from "./Components/HeadSection";
import { BiPhoneCall } from "react-icons/bi";
import AboutMe from "./Components/AboutMe";


export default function Home() {
  return (
    <>
 
      <title>My Portfolio</title>

     <Navbar/>
     <HeadSection/>
     <AboutMe/>
      
    </>
    
  );
}
