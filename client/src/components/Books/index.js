import React from "react";
import './style.css';
import { Col, Row, Container } from '../Grid';
import Card from '../Card';

function Books({ books }) {

  return (
    <Container>
        <Row>
            <Col>
                {books.map(({volumeInfo}, {id}) => {
                    let imageLink;
                    if (!volumeInfo.imageLinks) {
                        imageLink = '';
                    } else {
                        imageLink = volumeInfo.imageLinks.smallThumbnail;
                    }

                    let authors;
                    if (!volumeInfo.authors) {
                        authors = 'unknown';
                    } else {
                        authors = volumeInfo.authors.join(', ');
                    }

                    let synopsis;
                    if (volumeInfo.description === undefined) {
                        synopsis = 'No description';
                    } else {
                        synopsis = volumeInfo.description;   
                    }
                    console.log(volumeInfo)
                   return <Card 
                        key={id}
                        title={volumeInfo.title}
                        authors={authors}
                        link={volumeInfo.infoLink}
                        image={imageLink}
                        synopsis={synopsis}
                    />
                })}
            </Col>
        </Row>
    </Container>
  );
}

export default Books;