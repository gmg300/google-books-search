import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import Book from "../components/Book";
import { Col, Row, Container } from "../components/Grid";
import NoResults from "../components/NoResults";

function Search() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    API.searchBooks(search).then((res) => {
      setBooks(res.data.items);
    });
  }, [search]);

  function handleInputChange(event) {
    const { value } = event.target;
    setSearch(value);
  }

  return (
    <main>
      <Jumbotron />
      <Container>
        <Row>
          <Col>
            <form>
              <div className="form-group mb-4">
                <input
                  id="exampleFormControlInput1"
                  type="email"
                  placeholder="Find books..."
                  className="form-control form-control-underlined"
                  onChange={handleInputChange}
                />
              </div>
            </form>
          </Col>
        </Row>
        <Row>
          <Col>
            <NoResults books={books} />
            {books.map(({ volumeInfo, id }, i) => {
              let imageLink;
              if (!volumeInfo.imageLinks) {
                imageLink = "no image";
              } else {
                imageLink = volumeInfo.imageLinks.smallThumbnail;
              }
              let authors;
              if (!volumeInfo.authors) {
                authors = "unknown";
              } else {
                authors = volumeInfo.authors.join(", ");
              }
              let synopsis;
              if (volumeInfo.description === undefined) {
                synopsis = "No description";
              } else {
                synopsis = volumeInfo.description;
              }
              return (
                <Book
                  key={i}
                  googleId={id}
                  title={volumeInfo.title}
                  authors={authors}
                  link={volumeInfo.infoLink}
                  image={imageLink}
                  synopsis={synopsis}
                />
              );
            })}
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Search;
