import backArrowIcon from "../../assets/images/back_arrow_icon.png";
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from "../../webservice/axios";
import { API_KEY } from "../../constants";
import "./Player.css";
function Player() {
    const [urlId,setUrlId]= useState('');
    const navigate= useNavigate();
    const { id }= useParams();
    useEffect(()=> {
      axios.get(`/movie/${id}/videos?language=en-US&api_key=${API_KEY}`).then((response) => {
      if (response.data.results.length !== 0) {
        setUrlId(response.data.results[0]);
      } else {
        console.log('No Trailer');
      }
    }).catch((err)=> alert("Network Error" + err));
    },[]);
  return (
     <div className='player'>
      <img src={backArrowIcon} alt='' onClick={()=> navigate(-2)}/>
      <iframe src={`https://www.youtube.com/embed/${urlId.key}`} width="90%" height="90%"
        title='Trailer' frameBorder="0" allowFullScreen ></iframe>
      <div className='player-info'>
        <p>{urlId.published_at?.slice(0,10)}</p>
        <p>{urlId.name}</p>
        <p>{urlId.type}</p>
      </div>
    </div>
  );
}

export default Player
