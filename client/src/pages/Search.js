import React from "react";
import Jumbotron from "../components/Jumbotron";
import SearchBar from '../components/SearchBar';
import Books from '../components/Books';

function Search() {
  return (
    <div>
      <Jumbotron />
      <SearchBar />
      <Books />
    </div>
  );
}

export default Search;
