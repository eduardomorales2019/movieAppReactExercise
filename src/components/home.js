import React from "react";
import Movies from "./movies";
import { SearchForm } from "./searchForm";
import "../index.css";
const Home = () => {
  return (
    <div>
      <SearchForm />
      <Movies />
    </div>
  );
};

export default Home;
