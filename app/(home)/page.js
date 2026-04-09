import Aboutme from "@/components/Aboutme";
import HeroSection from "@/components/HeroSection";
import Achievements from "@/containers/Achievements";
import Contact from "@/containers/Contact";
import Projects from "@/containers/Projects";
import Works from "@/containers/Works";
import Education from "@/containers/Education"; // Ensure this matches your file path

export default function Page() {
  return (
    <div className="main-home-container">
      <div className="flex flex-col gap-10 mb-24">
        {/* Added HeroSection back in case you wanted it at the top */}
       
        
        <Aboutme />
        
        {/* Render the Education component here */}
        <Education /> 
        
        <Works />
        
        {/* <Projects /> */}
        
        <Achievements />
        
        <Contact />
      </div>
    </div>
  );
}