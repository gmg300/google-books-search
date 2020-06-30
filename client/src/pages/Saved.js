import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Book from '../components/Book';
import API from "../utils/API";
import NoResults from "../components/NoResults";

function Saved() {
  const [books, setBooks] = useState([]);
  
  useEffect(() => {
    API.getSavedBooks()
      .then(res => {
        setBooks(res.data);
      });
  }, []);

  return (
    <main>
      <Jumbotron />
      <Container>
        <Row>
          <Col>
            <NoResults books={books}/>
            {books.map(book => {
                   return <Book 
                        key={book._id}
                        title={book.title}
                        authors={book.authors}
                        link={book.link}
                        image={book.image}
                        synopsis={book.synopsis}
                    />
                })}
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Saved;