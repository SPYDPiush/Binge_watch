import React, { useState,useEffect } from "react";
import './Next_Prev_btn';
import Next_prev_btn from './Next_Prev_btn';
import DetailedInfo from './Detail';



export default function Search(props){
  const imgpath = "https://image.tmdb.org/t/p/w1280";
  const [state,setState]=useState([]);
  const [Page,setPage]=useState(1);
  const [query,setQuery]=useState(props.query);
  const [selectedInfo, setSelectedInfo] = useState(null);
  const fetchData = async ()=>{
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTkxZjhmZWE2ZTU0NzNhY2UxZjM5OGIyYzE3ZTE3MiIsInN1YiI6IjY0MjQ0M2RlOTYwY2RlMDEwM2EzMzc4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sxZYrzFLdzRD9qtQIuwcT1z_Eyblvr9_4X_S0EfJSiQ'
        }
      };
    
      try{
      const response= await fetch(`https://api.themoviedb.org/3/search/movie?page=${Page}&query=${query}`, options) 
      const data=await response.json();
      setState(data.results);
      }
      catch(error){
        console.log(error);
      }
  }  

useEffect(()=>{
    fetchData()
},[Page,query])

function handlenewpage(newpage){
    setPage(newpage);
  }
  const handleItemClick = (info) => {
    setSelectedInfo(info);
  };
  useEffect(()=>{
    setQuery(props.query)

  },[props.query])
return(

  <>
  {selectedInfo ? (
        <DetailedInfo info={selectedInfo} />
      ):(

    <div className='box'>
        { state.length>0 ?(
          state.map((val) => {
          return (
              <div key={val.id} className="col-md-3 col-sm-4 py-3 d-flex justify-content-center g-4" id="card" onClick={() => handleItemClick(val)}>
                <div className="card " key={val.id}>
                    <img
                      src={`${imgpath}${val.poster_path}`}
                      alt="Movie Poster"
                      style={{ width: "200px", margin: "20px" }}
                    />
                  <div className="card-body">
                    <h5 className="card-title text-center fs-5">
                      {val.title}</h5>
                    <div className="d-flex fs-6 align-items-center justify-content-evenly movie">
                      <div>{val.media_type === "tv" ? "TV" : "Movie"}</div>
                      <div>{val.release_date || val.release_date}</div>
                    </div>
                  </div>
                </div>
              </div>
          );
        })):(
          <div>
            hello
          </div>
        )
      }
      <Next_prev_btn Page={Page} onpagechange={handlenewpage} />
    </div>
      )
    }
  </>
);


}