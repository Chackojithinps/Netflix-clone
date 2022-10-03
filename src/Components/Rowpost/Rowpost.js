import React, { useEffect, useState } from 'react'
import './Rowpost.css'
import {apiKey,imageUrl} from '../../Constants/Constants'
import YouTube from 'react-youtube'
import axios from '../../axios'

const Rowpost = (props) => {
  // const fn=[]
  const [movie, setMovie] = useState([])
  const [urlId,setUrlId]=useState('')
  useEffect(()=>{
     axios.get(props.url).then((response)=>{
       console.log(response.data)
       setMovie(response.data.results)
     }).catch((err)=>{
       
     })
   
  },[])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  const handleMovie=(id)=>{
    axios.get(`movie/${id}/videos?api_key=${apiKey}&language=en-US`).then((respone)=>{
      console.log(respone.data.results)
      if(respone.data.results.length!==0){
        setUrlId(respone.data.results[0])
       
      }
    })
 }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {
          movie.map((obj)=>(
          <img onClick={()=>handleMovie(obj.id)} className={ props.isSmall ? 'smallPoster':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
          
        ))}
          
      </div>
      { urlId && < YouTube videoId={urlId.key} opts={opts}  /> }
    
    </div>
  )
}

export default Rowpost
