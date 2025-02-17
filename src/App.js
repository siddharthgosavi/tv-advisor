import { useEffect, useState } from "react";
import moviedatabase from "./data.json";

import Header from "./components/Header";
import Hero from "./components/Hero";
import MovieCardSlider from "./components/MovieCardSlider";
function App() {
  const [searchKey, setSearchKey] = useState("");
  const [movieData, setMovieData] = useState(moviedatabase[0]);

  const [sliderData, setSliderData] = useState([]);

  const handleMovieChange = (movie) => {
    setMovieData(movie);
  };

  useEffect(() => {
    const resultA = moviedatabase.filter(
      (movie) => movie.Title !== movieData.Title
    );
    setSliderData(resultA);
  }, [movieData]);


  return (
    <div className="flex flex-col overflow-hidden h-screen justify-between bg-gradient-to-bl from-[#0f172a] via-[#1e1a78] to-[#0f172a] bg-cover">
      <Header
        searchKey={searchKey}
        setSearchKey={setSearchKey}
        setMovieData={setMovieData}
        moviedatabase={moviedatabase}
        handleMovieChange={handleMovieChange}
      />
      <Hero movieData={movieData} />
      <MovieCardSlider
        sliderData={sliderData}
        handleMovieChange={handleMovieChange}
      />
    </div>
  );
}

export default App;
