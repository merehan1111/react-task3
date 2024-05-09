import React, { useEffect, useState } from "react";
import axiosInstance from "../../axiosConfic/instance";
import { Link, useParams } from "react-router-dom";

export default function Movies() {
  const [movies, setMovie] = useState([]);
  const [pages, setPages] = useState(1);
  const getMovies = (page) => {
    axiosInstance
      .get(`/popular?&page=${page}`)
      .then((res) => {
        console.log(res);
        setMovie(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getMovies(pages);
  }, [pages]);
  const getNext = () => {
    setPages((oldPage) => oldPage + 1);
  };
  const getPrev = () => {
    if (pages > 1) {
      setPages((newPage) => newPage - 1);
    }
  };
  

  return (
    
    
    <>
    <div className="row row-cols-md-4">
      {movies.map((movie) => (
        <div className="col" key={movie.id}>
          <div className="card">
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} className="card-img-top"  style={{height:'350px'}} alt="..." />
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
              <p className="card-text">{movie.overview}</p>
              <Link to={`/movie/${movie.id}`}>
                <button className="btn btn-warning">Show Details</button>
              </Link>
            </div>
          </div>
          
        </div>
        
       
      ))}
      <div className=" ">
      <button className="btn btn-danger" onClick={getNext}>Next</button>
        <button className="btn btn-info" onClick={getPrev}>Previous</button>
      </div>

        
    </div>
  </>
  )  
//     <div classNameName="container">
//   {movies.map((movie) => (
//     <div className="row">
//       <div className="col-md-3">
//   <div className="card-group ">

//   <div className="card" key={movie.id}>
//     <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} className="card-img-top" alt="..."/>
//     <div className="card-body">
//       <h5 className="card-title">{movie.title}</h5>
//       <p className="card-text">{movie.overview}</p>
      // <Link to={`/movie/${movie.id}`}>
      // <button classNameName="btn btn-warning">Show Ditails</button>
// </Link>
// </div>
//     </div> 
   
   
//     <button classNameName="btn btn-danger" onClick={getNext}>Next</button>
//     <button classNameName="btn btn-info" onClick={getPrev}>Previous</button>
//   </div>
//   </div>
//   </div>
//    ))}
//   </div>


 

            }