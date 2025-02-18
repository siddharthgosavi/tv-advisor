import React from "react";
import StarRating from "./StarRating";

function Hero({ movieData }) {
  return (
    <div className="flex md:flex-col w-full items-center md:flex-row mx-10 p-10">
      <div className="w-full md:w-2/3">
        <h1 className="text-3xl">{movieData["Title"]}</h1>
        <span><StarRating rating={movieData["imdbRating"]/2}/></span>
        <p className="w-full">{movieData["Plot"]}</p>
      </div>
      <div className={`md:p-0 p-10 md:absolute md:top-18 md:right-20 flex w-full md:w-1/3 p-4 md:justify-end`}>
        <img src={movieData.Poster} alt="poster" />
      </div>
    </div>
  );
}

export default Hero;
