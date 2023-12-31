import React from "react";
import "./App.css";
import AppInfo from "../app-info/App-info";
import SearchPanel from "../search-panel/Search-panel";
import AppFiltr from "../app-filter/App-filter";
import MovieList from "../movie-list/Movie-list";
import MoviesAddForm from "../movies-add-form/Movies-add-form";

const App = () => {
  const data = [
    { name: "Empire of osman", viewers: 988, favourite: false, id: 1 },
    { name: "Ertugrul", viewers: 789, favourite: false, id: 2 },
    { name: "Osman", viewers: 1091, favourite: true, id: 3 },
  ];
  return (
    <div className="app font-monospace">
      <div className="content">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <AppFiltr />
        </div>
        <MovieList data={data} />
        <MoviesAddForm />
      </div>
    </div>
  );
};

export default App;
