import React from "react";
import "./style.css";
import BooksImg from "../../images/books-background.jpg";

let heroImg = {
  backgroundImage: `url(${BooksImg})`,
};

function Jumbotron() {
  return (
    <div className="jumbotron" style={heroImg}>
      <div className="caption">
        <h1>Google Books Search</h1>
        <p>Search for and Save Books of Interest</p>
      </div>
    </div>
  );
}

export default Jumbotron;
