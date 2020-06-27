import React from "react";
import "./style.css";

function Card({ title, authors, link, image, synopsis }) {
  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={image} className="card-img" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p>{authors}</p>
            <p className="card-text">
              {synopsis}
            </p>
            <p className="card-text">
              <a className='btn btn-primary' href={link} target="_blank">View</a>
              <button className='btn btn-primary'>Save</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
