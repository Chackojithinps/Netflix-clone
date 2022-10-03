import React, { useEffect, useState } from 'react'
import {apiKey,imageUrl} from '../../Constants/Constants'
import axios from '../../axios'

import "./Banner.css"
const Banner = () => {
  const [Movie, setMovie] = useState([])
  useEffect(()=>{
      axios.get("trending/all/week?api_key="+apiKey+"&language=en-US").then((response)=>{
        // console.log(response.data)
        // setMovie(response.data.results[7])
        setMovie(response.data.results.sort(function (a, b) { return 0.5 - Math.random() })[1])
      })
  },[])
  return (
    <div style={{backgroundImage:`url(${Movie ? imageUrl+Movie.backdrop_path: " "})`}} className='banner'>

    {/* // <div className='banner'> */}
       <div className='content'>
         <h1 className='title'>{Movie ? Movie.title : ""}</h1>
         <div className='banner-buttons'>
             <button className='button'>Play</button>
             <button className='button'>My list</button>
         </div>
         <h1 className='description'>{Movie ? Movie.overview : ""}</h1>
       </div>
    <div className="fade"></div>
    </div>
    // </div>
  )
}

export default Banner
