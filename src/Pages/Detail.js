import React, { useEffect, useState } from 'react';
import './Detail.css';


const DetailedInfo = (props) => {
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";

    const [state,setState]=useState([]);

    useEffect(()=>{
      const fetchdata= async ()=>{
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTkxZjhmZWE2ZTU0NzNhY2UxZjM5OGIyYzE3ZTE3MiIsInN1YiI6IjY0MjQ0M2RlOTYwY2RlMDEwM2EzMzc4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sxZYrzFLdzRD9qtQIuwcT1z_Eyblvr9_4X_S0EfJSiQ'
          }
        };

        try{
          const response=await  fetch(`https://api.themoviedb.org/3/movie/${props.info.id}/videos?language=en-US`,options)
          const data=await response.json()
          setState(data.results[0])
        }
        catch(error){
          console.log(error)
        }
      };
      fetchdata();

    },[]);
    const link = state.key ? `https://www.youtube.com/watch?v=${state.key}` : '';


    console.log(state.key);
    console.log(props.info.id)
  return (
    <div className='container'> 
      <div className="row">  
        <div className='col-md-6 position'  >
          <div className="card center movie_details">
              <div className="card-body" >
                  <h1 className="card-title center title fs-1" >{props.info.title}</h1>
                  <div className='desc'>
                    <div ><i class="bi bi-star-fill"></i> {props.info.vote_average}</div> 
                  </div>
                  <div className='discribe'>
                    <p>{props.info.overview}</p>
                  </div>
                  <div className='btn-trailer'>
                    <a href={link} ><button type="button" class="btn btn-outline-secondary btn-lg"> <i class="bi bi-play"></i> trailer</button></a>
                  </div>
              </div>
          </div>
        </div>
        <div className="col-md-6">
          <img src={`${IMGPATH}${props.info.poster_path}`} className="rounded float-end img-fluid m-2 back_image" alt={`${props.info.title}`}  style={{height:'80vh',width:'90%'}}/>
        </div>
      </div>
    </div>
  );
};

export default DetailedInfo;
