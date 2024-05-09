import axios from "axios";
import React, { useEffect, useState } from "react";
//import axiosInstance from "./../../axiosConfic/instance";
import { useParams } from "react-router-dom";

export default function MovieDetails() {
  console.log("//////////////MovieDetails/////////////////");
  console.log(useParams());
  const { id } = useParams();
  const [Movie, setMovie] = useState({});
  const getMovie = async () => {
    console.log(id);
    await axios
      //.get(`https://api.themoviedb.org/3/movie/1096197?api_key=c28eebf7bb39963adf0c89adbead022a`)
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=c28eebf7bb39963adf0c89adbead022a`
      )
      .then((res) => {
        console.log("***********then*****************");
        console.log(res);
        setMovie(res.data);
      })
      .catch((err) => {
        console.log("*************catch***************");
        console.log(err);
      });
  };
  useEffect(() => {
    console.log("------befor getMovie-----------------");

    console.log(Movie);
    getMovie();

    console.log("-------after getMovie----------------");

    console.log(Movie);
  }, [id]);
  return (
    <>
      <div className="movie-details-container">
        <div className="movie-details">
          <div className="movie-poster">
            <img
              src={`https://image.tmdb.org/t/p/w500${Movie.poster_path}`}
              style={{ width: "500px", height: "500px" }}
              alt={Movie.title}
            />
          </div>
          <div className="movie-info">
            <h2 className="movie-title">{Movie.title}</h2>
            <p className="movie-overview" style={{width:'400px'}}>
              {Movie.overview}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
