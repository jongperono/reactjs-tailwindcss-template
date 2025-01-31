import Image from "next/image";
import Navbar from "./Components/Navbar";
import Profile from "./Components/Profile";
import AboutMe from "./Components/AboutMe";
import Experience from "./Components/Experience";


export default function Home() {
  return (
    <div className=" bg-white border overflow-y-auto">
      <nav className="text-black">
      <Navbar/>
      </nav>
      <div>
        <section className="text-black">
          <Profile/>
        </section>
        <section className="text-black">
          <AboutMe/>
        </section>
        <section className="text-black">
          <Experience/>
        </section>
        {/* <section className="text-black">
          section 4
        </section>
        <section className="text-black">
          section 5
        </section>
        <section className="text-black">
          section 6
        </section> */}
      </div>
      
    </div>
  );
}
