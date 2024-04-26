import React from "react"
import '../Hero/hero.css'
import heroBanner from '../../assets/hero_headphones.png'
export default function Hero(){
    return(
       <>
        <div className="heroBanner">
        <div className='text'>
                <p align="center">100 Thousand Songs, ad-free</p>
                <p align="center">Over thousands podcast episodes</p>
            </div>
            <img src={heroBanner} className="heroImage" alt="Hero-Banner" />
        </div>

       </>
       )
}