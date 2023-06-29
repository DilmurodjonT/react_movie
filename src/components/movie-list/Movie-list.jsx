import React from "react";
import "./Movie-list.css";
import MoviListItem from "../movi-list-item/Movi-list-item";

const MovieList = () => {
  return (
    <div className="movie-list">
      {" "}
      <MoviListItem />
      <MoviListItem />
      <MoviListItem />
    </div>
  );
};

export default MovieList;
