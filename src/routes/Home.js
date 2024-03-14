import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HomeImg from "../assests/12.jpg";

import Footer from "../components/Footer";
import Trip from "../components/Trip";
import Destination from "../components/Destination";

function Home(){

    return(
        <>
            
            <Navbar/>
              
            <Hero

               cName='hero'
               heroimg={HomeImg}
               title="Your Journey Your Story"
               text="Choose Your Favourite Destination"
               buttonText="Travel Plan"
               url='/'
               btnclass='show'
            
            />

            <Destination/>

            

            <Trip/>


            <Footer/>
        
        
        </>
    )



}
export default Home;
















