import React, { useEffect, useState } from "react";
import { FaFilm, FaMagnifyingGlass } from "react-icons/fa6";

function Header({
  searchKey,
  setSearchKey,
  setMovieData,
  moviedatabase,
  handleMovieChange,
}) {
  const [searchResults, setSearchResults] = useState([moviedatabase]);
  const [dropdown, setDropdown] = useState(false);

  const handleSearch = (value) => {
    setSearchKey(value);
  };

  useEffect(() => {
    const result = moviedatabase.filter(
      (movie) => movie.Title.includes(searchKey) === true
    );
    setSearchResults(result);
  }, [searchKey, moviedatabase]);

  const getMovieData = () => {
    fetch(`https://www.omdbapi.com/?apikey=6f7edc4b&t=${searchKey}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMovieData(data);
        setSearchResults([...searchResults, data]);
      });
  };

  return (
    <div className="flex md:flex-row flex-col justify-center items-center md:w-full md:justify-between mx-10 p-10">
      <div className="flex w-full md:w-1/3 flex-col items-center md:mb-0 mb-4 md:items-start gap-2">
        <h1 className="flex gap-4 text-2xl">
          <FaFilm />
          <span>WatoWatch</span>
        </h1>
        <p className="text-sm font-thin">File Movie that you may like</p>
      </div>

      <div className="flex w-full md:w-2/3 flex-col md:items-start">
        <div className="flex flex-col md:items-start">
          <div className="flex justify-center">
            <input
              className="w-98 p-2 rounded-full bg-white text-black "
              type="text"
              placeholder="Search a movie you like ..."
              value={searchKey}
              onChange={(e) => {
                handleSearch(e.target.value);
              }}
              onFocus={() => setDropdown(true)}
            />
            <button
              className="relative top-0 right-8 text-lg text-black cursor-pointer"
              type="submit"
              onClick={getMovieData}
            >
              <FaMagnifyingGlass />
            </button>
          </div>
          {dropdown && searchKey.length > 0 && (
            <ul className="absolute text-black mt-11 ml-10 z-10">
              {searchResults.map((movie, index) => {
                return (
                  <li
                    onClick={() => {
                      handleMovieChange(movie);
                      setDropdown(false);
                      setSearchKey("");
                    }}
                    className="rounded-lg bg-white ring-1 w-96 h-10 p-2 hover:bg-black hover:text-white cursor-pointer"
                    key={index}
                  >
                    <p>{movie.Title}</p>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
