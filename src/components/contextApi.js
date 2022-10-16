import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
// --CONTEXT. WE SET HERE ALL STATES SO WE CAN USE IT IN OTHER COMPONENTS.

// 0.api endpoint
// we export because we will use to look for a spaceial movies.
// and i must write thhe process.env and the name in the link so we can get acesss with our id. and in the mommento of upload the repository the personal key will not be available

export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

console.log(API_ENDPOINT);

//
//1. create context. watch out not usecontext  at the botton..

const AppContext = React.createContext();

// 2. create the provider.
//- always use the children in the middle.

const AppProvider = ({ children }) => {
  // STATES.

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ show: "false", msg: "" });
  const [movies, setMovies] = useState([]);
  const [querry, setQuerry] = useState("avengers");

  // ========================================================
  // fetchor axios recive a promise. ! always.
  const fetchMovies = async (url) => {
    // everytime I  invoke the function by default the loading must be true!
    setLoading(true);
    try {
      // AXIOS----
      const { data } = await axios(url);
      console.log(data, "soy data ");
      // IMPOTANT-. TO SET THE FUNCTIONALLITY WE MUST SET THE LOGIC FOR GET THE ARRAY RESPONSE AND CHECK THE CAPITALICE WORDS.

      if (data.Response === "True") {
        setMovies(data.Search);
        setError({ show: false, msg: "" });
        setLoading(false);
      } else {
        setError({ show: true, msg: data.Error });
      }

      //--- FETCH(con fech no pude mostrar en consola. )

      // const response = await fetch(url);
      // const data = response.json();
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  // always set querry in the array dependency cause i want to fetchdata every singletme when i type something in the input
  // ========================================================
  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}&s=${querry}`);
  }, [querry]);

  return (
    <AppContext.Provider value={{ loading, error, movies, querry, setQuerry }}>
      {children}{" "}
    </AppContext.Provider>
  );
};

// 3.- always and  not mandatory use a Global context so i can use in all  places.

// CREATE PERSONAL   HOOK.
//3.1 Here we can use the usecontext now... and grab the Appcontext into it.
export const useGlobalContext = () => {
  return useContext(AppContext);
};

// 4. export the appcontext  and Appprovider

export { AppContext, AppProvider };
