import axios from "../../webservice/axios";
import {API_KEY,imageUrl} from "../../constants";
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';
import "./RowPost.css";
function RowPost(props) {
    const[movies,setMovies]= useState([]);
    const navigate= useNavigate();
    const postersRef= useRef();
    useEffect(() => {
    axios.get(props.url).then((response) => {
      // console.log(response.data);
      setMovies(response.data.results);
    }).catch((err) => { alert("Network error" + err) });
  }, []);
  
  const handleWheel= (e)=> {
   e.preventDefault();
   postersRef.current.scrollLeft += e.deltaY;
    }
  useEffect(()=> {
    postersRef.current.addEventListener("wheel", handleWheel);
  });
  return (
     <div className='row'>
      <h2>{props.title}</h2>
      {/* { urlId && <YouTube videoId={urlId.key} opts={opts} onReady={onPlayerReady} onError={(err)=>  console.error("YouTube Player Error:", err)}/> } */}
      <div className='posters' ref={postersRef}>
        {movies.map((val, index) =>{
          return <Link to={`/player/${val.id}`} className='card' key={index} >
           <img onClick={()=> navigate(`/player/${val.id}`)} className={props.isSmall ? 'poster-small' : 'poster'} alt='poster' src={`${imageUrl + val.backdrop_path}`} />
           <p style={{marginLeft:'5px'}}>{val.original_title}</p>
          </Link>
        }
        )}


      </div>
      
    </div>
  );
}

export default RowPost
