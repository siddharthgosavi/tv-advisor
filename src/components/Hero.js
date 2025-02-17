import React from "react";

function Hero({ movieData }) {
  return (
    <div className="flex mx-10 p-10">
      <div className="w-2/3 ">
        <h1 className="text-3xl">{movieData["Title"]}</h1>
        <span>{movieData["imdbRating"]}/10</span>
        <p className="w-full">{movieData["Plot"]}</p>
      </div>
      <div className={`absolute top-18 right-20 flex w-1/3 p-4 justify-end`}>
        <img src={movieData.Poster} alt="poster" />
      </div>
    </div>
  );
}

export default Hero;
