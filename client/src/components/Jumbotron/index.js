import React from "react";
import "./style.css";
import BooksImg from "../../images/books-background.jpg";
import { useLocation } from  'react-router-dom';



export default function Jumbotron() {
  
  const { pathname } = useLocation();

  return (
    <div className="jumbotron" style={{backgroundImage: `url(${BooksImg})`}}>
      <div className="caption">
        <h1>Google Books Search</h1>
        <p>{pathname === '/saved' ? 'Your Saved Books' : 'Search for and Save Books of Interest'}</p>
      </div>
    </div>
  );
}

