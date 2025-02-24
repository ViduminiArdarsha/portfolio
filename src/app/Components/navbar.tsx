'Use Client'
import { BiDownload } from "react-icons/bi";

function navbar(){
    return(
        <section className="bg-white px-20">
                <nav className="py-8 mb-10 flex justify-between">
                  <h2 className="py-3">Vidumini's Portfolio</h2>
                    <ul className="flex justify-between px-15 py-3 gap-10">
                      <li>Home</li>
                      <li>About</li>
                      <li>Projects</li>
                      <li>Contact</li>
                    </ul>
        
                  <div className="bg-gradient-to-r from-indigo-500 to-blue-600 px-5 py-3 rounded-md text-white flex justify-between">
                    <BiDownload className="cursor-pointer text-2xl"/>
                    <a href="#" className="ml-3">Download CV</a>
                  </div>
                </nav>
              </section>
    );
}
export default navbar;