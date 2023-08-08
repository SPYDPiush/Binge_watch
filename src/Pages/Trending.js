import React, { useState, useEffect } from 'react';
import "./Trending.css";
import './Next_Prev_btn';
import Next_prev_btn from './Next_Prev_btn';
import DetailedInfo from './Detail';

const Trending = () => {
  const imgpath = "https://image.tmdb.org/t/p/w1280";
  const [state, setState] = useState([]);
  const [Page, setPage] = useState(1);
  const [selectedInfo, setSelectedInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTkxZjhmZWE2ZTU0NzNhY2UxZjM5OGIyYzE3ZTE3MiIsInN1YiI6IjY0MjQ0M2RlOTYwY2RlMDEwM2EzMzc4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sxZYrzFLdzRD9qtQIuwcT1z_Eyblvr9_4X_S0EfJSiQ'
        }
      };

      try {
        const response = await fetch(`https://api.themoviedb.org/3/trending/all/day?language=en-US&page=${Page}`, options);
        const data = await response.json();
        setState(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [Page]);

  const handleItemClick = (info) => {
    setSelectedInfo(info);
  };

  function handleNewPage(newpage) {
    setPage(newpage);
  }

  return (
    <div style={{background:"#FFF4F4"}}>
      {selectedInfo ? (
        <DetailedInfo info={selectedInfo} />
      ) : (
        <>
          <div className='container'>
            <div className="row py-4">
              <div className="col-12 mt-2 mb-4 fs-1 fw-bold text-underline head d-flex justify-content-center align-items-center">
                <i className='bi bi-fire mx-4'></i>
                <h4 className='fs-2'>Trending Today</h4>
                <i className='bi bi-fire mx-4'></i>
              </div>
            </div>
          </div>
          <div className='box'>
            {state.length > 0 ? (
              state.map((val) => (
                <div key={val.id} className="col-md-3 col-sm-4 pt-3 d-flex justify-content-center g-4" id="card" onClick={() => handleItemClick(val)}>
                  <div className="card " key={val.id}>
                    <img
                      src={`${imgpath}${val.poster_path}`}
                      alt="Movie Poster"
                      style={{ width: "200px", margin: "20px" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title text-center fs-5">
                        {val.title}
                      </h5>
                      <div className="d-flex fs-6 align-items-center justify-content-evenly movie">
                        <div>{val.media_type === "tv" ? "TV" : "Movie"}</div>
                        <div>{val.first_air_date || val.release_date}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div>Loading...</div>
            )}
          </div>
          <Next_prev_btn Page={Page} onpagechange={handleNewPage} />
        </>
      )}
    </div>
  )
}

export default Trending;
