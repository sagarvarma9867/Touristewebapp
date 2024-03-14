import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assests/2.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact(){

    return(
        <>
        
        
              <Navbar/>
              
              <Hero
  
                 cName='hero-mid'
                 heroimg={AboutImg}
                 title="Contact"
                 
                 
                 btnclass='hide' />

                 <ContactForm/>

                 
                <Footer/>
              
        
        
        
        </>
    )



}
export default Contact;