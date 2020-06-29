import React from "react";
import "./style.css";

function Card({ title, authors, link, image, synopsis }) {
  return (
    <div className="card mb-3">
      <div className="row">
        <div className="col-sm-4 card-col">
          <img src={image} className="card-img img-responsive" alt="..." />
        </div>
        <div className="col-sm-8 card-col">
          <h5 className="card-title">{title}</h5>
          <p>{authors}</p>
          <p className="card-text">{synopsis}</p>
          <p className="card-text">
            <a className="btn btn-primary" href={link} target="_blank">
              View
            </a>
            <button className="btn btn-primary">Save</button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
