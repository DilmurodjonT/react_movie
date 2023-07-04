import React from "react";
import "./Movie-list.css";
import MoviListItem from "../movi-list-item/Movi-list-item";

const MovieList = ({ data }) => {
  return (
    <ul className="movie-list">
      {data.map((item) => (
        <MoviListItem
          key={item.id}
          name={item.name}
          viewers={item.viewers}
          favourite={item.favourite}
        />
      ))}
    </ul>
  );
};

export default MovieList;
