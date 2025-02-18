import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MovieCard({ movie, handleMovieChange }) {
  return (
    <div
      className={`flex items-end bg-[url(${movie.Poster})] bg-cover shadow-lg  w-52 h-36 rounded-lg cursor-pointer`}
      onClick={() => {
        handleMovieChange(movie);
      }}
    >
      <p className="bg-black/70 text-lg text-center w-full">{movie.Title}</p>
    </div>
  );
}

function MovieCardSlider({ sliderData, handleMovieChange }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    swipeToSlide: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="p-10 ml-10">
      <div>
        <h1>You'll probably also like...</h1>
        <div className="slider-container">
          <Slider className="w-full flex justify-between" {...settings}>
            {sliderData.map((movie, index) => {
              return (
                <MovieCard
                  movie={movie}
                  key={index}
                  handleMovieChange={handleMovieChange}
                />
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default MovieCardSlider;
