import "../index.css";
import React from "react";
import Movies from "./movies";
import SearchForm from "./searchForm";

const Home = () => {
  return (
    <div>
      <Movies />
      <SearchForm />
    </div>
  );
};

export default Home;
