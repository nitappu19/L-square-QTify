
import {
    Card,
  Typography,
} from "@mui/material";
import './MusicCard.css'
import React from "react";




export default function MusicCard({Songs}){
    // const songs = {
    //     id: "e0677c33-638c-43ee-9b9f-2b75727cbaed",
    //     title: "Filthy Secretary",
    //     follows: 5041,
    //     image: "https://images.pexels.com/photos/33779/hand-microphone-mic-hold.jpg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    //     slug: "filthy-secretary",}

    
    return(
        <div className='card'>
        <div className='SingleAlbumBody'>
            <img src={Songs.image} className="" alt="album img" />
        </div>
         <p>{Songs.title}</p>
        <div className='SingleAlbumFooter'>
            <button className='SingleAlbumFooterButton'>100 Follows</button>
        </div>
       
    </div>

//     <div className="music-card">
//     <h2>{album.title}</h2>
//     <p>Artist: {album.artist}</p>
//     <p>Genre: {album.genre}</p>
//     <p>Release Year: {album.releaseYear}</p>
//     <img src={album.coverUrl} alt={album.title} />
//   </div>
   
    )
    
}