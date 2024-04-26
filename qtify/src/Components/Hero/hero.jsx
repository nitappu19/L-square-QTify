import './hero.css';
import heroImg from "../../assets/hero_headphones.png";




function Hero() {
    return (
      <>
        <div className='bannner'>
            <div className='text'>
                <p align="center">100 Thousand Songs, ad-free</p>
                <p align="center">Over thousands podcast episodes</p>
            </div>
            <div className='image'>
                <img src={heroImg} alt="hero" className='heroImage' />
            </div>
        </div>
      </>
    )
  }
  
  export default Hero;
  