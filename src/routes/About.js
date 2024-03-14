import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assests/night.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About(){

    return(
        <>
             
             <Navbar/>
              
              <Hero
  
                 cName='hero-mid'
                 heroimg={AboutImg}
                 title="About"
                 
                 
                 btnclass='hide'
              
              
                 
              />

            <AboutUs/>

              
            <Footer/>
          
          
          
        
        
        
        
        </>
    )



}
export default About;