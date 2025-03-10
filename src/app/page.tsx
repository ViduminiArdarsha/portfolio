import Navbar from "./MainComponenets/navbar";
import AboutMe from "./MainComponenets/AboutMe";
import HeadSection from "./MainComponenets/HeadSection";
import Projects from "./MainComponenets/Projects";

export default function Home() {
  return (

    <>
     {/* <Navbar/> */}
     <HeadSection/>
     <Projects/>
     <AboutMe/> 
    </>


  );
}
