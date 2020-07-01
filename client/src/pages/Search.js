import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import SearchBar from "../components/SearchBar";
import Book from "../components/Book";
import NoResults from "../components/NoResults";


export default function Search() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search.trim() === "") {
      return;
    } else {
      API.searchBooks(search).then((res) => {
        setBooks(res.data.items);
      });
    }
  }, [search]);

  function renderBooks() {
    return books.map(({ volumeInfo, id }, i) => {
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
    });
  }

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
              <SearchBar handleInputChange={handleInputChange} />
            </Col>
          </Row>
          <Row>
            <Col>
              <NoResults books={books} />
              {renderBooks()}
            </Col>
          </Row>
        </Container>
    </main>
  );
}

