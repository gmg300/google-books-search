import React, { useState, useEffect } from "react";
import './style.css';
import { Col, Row, Container } from '../Grid';
import Card from '../Card';

function Books() {
    const [books, setBooks] = useState([])


  return (
    <Container>
        <Row>
            <Col>
                <Card />
                {/* {books.map(book => {
                    <Card 
                        key={book._id}
                        title={book.title}
                        authors={book.authors}
                        link={book.link}
                        image={book.image}
                        synopsis={book.synopsis}
                    />
                })} */}
            </Col>
        </Row>
    </Container>
  );
}

export default Books;