import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServiceImg from "../assests/night.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service(){

    return(
        <>
        
        
            
        <    Navbar/>
              
              <Hero
  
                 cName='hero-mid'
                 heroimg={ServiceImg}
                 title="Service"
                 
                 
                 btnclass='hide'
              
              
                 
              />

              <Trip/>

              <Footer/>
          
        
        
        </>
    )



}
export default Service;