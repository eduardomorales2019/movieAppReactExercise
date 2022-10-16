import React from "react";
import { useGlobalContext } from "./contextApi";
import { Link } from "react-router-dom";
//Here is your key: eff07290

// OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=eff07290

// ===================================
// Here is where we display all movies.

const Movies = () => {
  const data = useGlobalContext();
  console.log(data);

  return <div>Movies</div>;
};

export default Movies;
