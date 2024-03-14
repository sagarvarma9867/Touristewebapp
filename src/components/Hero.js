import "./HeroStyles.css";
function Hero(props){

    return(
        <>
    
          <div className={props.cName}>
            <img alt="Heroimg "src={props.heroimg}/>

            <div className="hero-text">
              <h1>{props.title}</h1>
              <p>{props.text}</p>
              <br/>
              <a href={props.url} className={props.btnclass}>{props.buttonText}</a>
            </div>
          </div>
        
        
        
      
        </>
    );



}
export default Hero;