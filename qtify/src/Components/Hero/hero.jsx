
import heroImg from "../../assets/hero_headphones.png";
import '../Hero/hero.css'


function Hero() {
    return (
      <>
       <div className='hero'>
       <div className='bannner'>
          <div className='text'>
              <p align="center">100 Thousand Songs, ad-free</p>
              <p align="center">Over thousands podcast episodes</p>
          </div>
          <div className='image'>
              <img src={heroImg} alt="hero" className='heroImage' />
          </div>
      </div>
        </div>
     
    </>
    )
  }
  
  export default Hero;
  