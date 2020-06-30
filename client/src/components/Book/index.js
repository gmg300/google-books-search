import React from "react";
import "./style.css";
import API from "../../utils/API";
import noImg from '../../images/no-image.png';
import ViewBtn from '../ViewBtn';
import SaveBtn from '../SaveBtn';
import RemoveBtn from '../RemoveBtn';

function Book({ title, authors, link, image, synopsis, id }) {

  async function saveBook(id) {
    try {
      const res = await API.searchBooksById(id);
      API.saveBook({
        title: res.data.volumeInfo.title,
        authors: res.data.volumeInfo.authors,
        link: res.data.volumeInfo.infoLink,
        image: res.data.volumeInfo.imageLinks.smallThumbnail,
        synopsis: res.data.volumeInfo.description,
      });
    } catch (err) {
      console.log(err);
    }
  }

  function removeBook(id) {}

  return (
    <div className="card mb-3">
      <div className="row">
        <div className="col-sm-4 card-col">
          <img src={image === 'no image' ? noImg : image} className="card-img img-responsive" alt="..." />
        </div>
        <div className="col-sm-8 card-col">
          <h5 className="card-title">{title}</h5>
          <p>{authors}</p>
          <p className="card-text">{synopsis}</p>
          <p className="card-text">
            <ViewBtn link={link}/>
            <SaveBtn id={id} saveBook={saveBook}/>
            <RemoveBtn id={id} removeBook={removeBook} />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Book;
