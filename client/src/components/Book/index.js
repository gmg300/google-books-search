import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./style.css";
import API from "../../utils/API";
import noImg from "../../images/no-image.png";
import ViewBtn from "../ViewBtn";
import SaveBtn from "../SaveBtn";
import RemoveBtn from "../RemoveBtn";

export default function Book({
  title,
  authors,
  link,
  image,
  synopsis,
  id,
  googleId
}) {
  const history = useHistory();
  const [isSaving, setIsSaving] = useState(false);
  const [isRemoving, setIsRemoving] = useState(false);

  async function saveBook(googleId) {
    try {
      setIsSaving(true);
      const res = await API.searchBooksById(googleId);
      const synopsis = stripHTMLTags(res.data.volumeInfo.description);
      API.saveBook({
        title: res.data.volumeInfo.title,
        authors: res.data.volumeInfo.authors,
        link: res.data.volumeInfo.infoLink,
        image: res.data.volumeInfo.imageLinks.smallThumbnail,
        synopsis: synopsis,
        googleId: res.data.id,
      });
      setIsSaving(false);
      history.push("/saved");
    } catch (err) {
      setIsSaving(false);
      console.log(err);
    }
  }

  async function removeBook(id) {
    try {
      setIsRemoving(true);
      const res = API.deleteBook(id);
      setIsRemoving(false);
      history.go()
    } catch (err) {
      setIsRemoving(false);
      console.log(err);
    }
  }

  // Google Books API search by ID seems to return the description with HTML tags included
  // Strip the tags before saving to MongoDB - https://www.w3resource.com/javascript-exercises/javascript-string-exercise-35.php
  function stripHTMLTags(str) {
    if (str === null || str === "" || str === undefined) return "No description";
    else str = str.toString();
    return str.replace(/<[^>]*>/g, "");
  }

  return (
    <div className="card mb-3">
      <div className="row">
        <div className="col-sm-4 card-col">
          <img
            src={image === "no image" ? noImg : image}
            className="card-img img-responsive"
            alt="..."
          />
        </div>
        <div className="col-sm-8 card-col">
          <h5 className="card-title">{title}</h5>
          <p>{authors}</p>
          <p className="card-text">{synopsis}</p>
          <p className="card-text">
            <ViewBtn link={link} />
            <SaveBtn
              googleId={googleId}
              saveBook={saveBook}
              isSaving={isSaving}
            />
            <RemoveBtn
              id={id}
              removeBook={removeBook}
              isRemoving={isRemoving}
            />
          </p>
        </div>
      </div>
    </div>
  );
}
