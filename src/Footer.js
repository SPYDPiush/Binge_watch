import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer(){
    const data=[
        {
            icon: "bi bi-fire",
            name: "Trending",
            link: "/"
        },
        {
            icon: "bi bi-film",
            name: "Movies",
            link: "/movies"
        },
        {
            icon: "bi bi-tv",
            name: "TV",
            link: "/tv"
        },
        {
            icon: "bi bi-camera-reels",
            name: "Webseries",
            link: "/webseries"
        }
    ]
    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 text-center bg-dark footer">
                        {data.map((val) => {
                            return(
                                <>
                                <NavLink to={`${val.link}`}>                                
                                    <button className="col-md-2 btn btn-dark">
                                        < i className={`${val.icon}`} id="fire"></i>
                                        <br></br>
                                        <h5 className="pt-1 fs-6"> {`${val.name}`}</h5>
                                    </button> 
                                </NavLink>
                                </>
                            );

                        })}
                    </div>
                </div>
            </div>
        </>
    )
}