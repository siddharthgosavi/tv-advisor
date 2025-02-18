import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MovieCard({ movie, handleMovieChange }) {
  return (
    <div
      className={`flex items-end bg-[url(${movie.Poster})] bg-cover shadow-lg lg:w-56 md:w-40 w-44 h-36 rounded-lg cursor-pointer`}
      onClick={() => {
        handleMovieChange(movie);
      }}
    >
      <p className="bg-black/70 text-lg text-center w-full rounded-b-lg">
        {movie.Title}
      </p>
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
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
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
    <div className="pb-10 md:p-10 ml-10">
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
