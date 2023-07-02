import React from "react";
import "./Movie-list.css";
import MoviListItem from "../movi-list-item/Movi-list-item";

const MovieList = ({ data }) => {
  return (
    <div className="movie-list">
      {data.map((item) => (
        <MoviListItem name={item.name} viewers={item.viewers} />
      ))}
    </div>
  );
};

export default MovieList;
