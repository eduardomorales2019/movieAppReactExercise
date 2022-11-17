import React from "react";
import { useGlobalContext } from "./contextApi";
import { Link } from "react-router-dom";

// URL = PICTURE OF NOTHING AVAILABLE
const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";
// ===================================
// Here is where we display all movies.

// const Movies = () => {
//   const { movies } = useGlobalContext();
//   console.log(movies);
//   return <div>Movies</div>;
// };

const Movies = () => {
  const { movies, loading } = useGlobalContext();

  // LOADING EFFECT.
  if (loading) {
    return <div className="loading"></div>;
  }
  return (
    <section className="movies">
      {movies.map((movie) => {
        // PROPERTIES AS OBJECT  TO HANDLE THEM INTO THE JSLAND SPANCES.
        const { imdbID: id, Poster: poster, Title: title, Year: year } = movie;

        return (
          <Link to={`/movies/${id}`} key={id} className="movie">
            <article>
              {/* // IF THERE IS A PIC, JUST GRAB MU URL PIC  */}
              <img src={poster === "N/A" ? url : poster} alt={title} />
              <div className="movie-info">
                <h4 className="title">{title}</h4>
                <p>{year}</p>
              </div>
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default Movies;
