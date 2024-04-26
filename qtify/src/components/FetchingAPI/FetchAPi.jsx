import React from "react";
import  { useState, useEffect } from 'react';
import '../FetchingAPI/FetchAPI.css'

export default function FetchAPi(){
    const [albums, setAlbums] = useState([]);
    const [newSong, setnewSong] = useState([]);
   const [loading, setLoading] = useState(true);

  const fetchTopSongs = async () =>{
    try {
        const response = await fetch("https://qtify-backend-labs.crio.do/albums/top");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setAlbums(data);
        setLoading(false);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        setLoading(false);
      }
  }

  const fetchNewSongs = async () =>{
    try {
      const response = await fetch(`https://qtify-backend-labs.crio.do/albums/new`);
    if(!response.ok){
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    setnewSong(data);
    setLoading(false);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
        setLoading(false);
    }
  }

  useEffect(() => {
    fetchTopSongs();
    fetchNewSongs();
  }, []);

  return (
  


  <div>
  

</div>
  );

}