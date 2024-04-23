import React from "react"
import '../Hero/Hero.css'
import heroBanner from '../../assets/hero_headphones.png'
export default function Hero(){
    return(
       <>
        <div className="heroBanner">
        <h2 className="heroCaption">100 Thousand Songs,ad-free Over thousands podcast episodes Over thousands podcast episodes</h2>
        
        <img src={heroBanner} className="heroImage" alt="Hero-Banner" />
        </div>
    
       </>
       )
}