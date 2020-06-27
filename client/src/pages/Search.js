import React, { useState, useEffect }  from "react";
import API from '../utils/API';
import Jumbotron from "../components/Jumbotron";
import Books from '../components/Books';
import { Col, Row, Container } from '../components/Grid';

function Search() {
  const [books, setBooks] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    searchBooks()
  }, [search])

  function searchBooks() {
    API.getBooks(search)
      .then(res => {
        setBooks(res.data.items)
      })
  }

  function handleInputChange(event) {
    const { value } = event.target;
    setSearch(value)
  };

  return (
    <div>
      <Jumbotron />
      <Container>
      <Row>
        <Col>
          <form>
            <div class="form-group mb-4">
              <input
                id="exampleFormControlInput1"
                type="email"
                placeholder="Find books..."
                class="form-control form-control-underlined"
                onChange={handleInputChange}
              />
            </div>
          </form>
        </Col>
      </Row>
    </Container>
    <Books books={books}/>
    </div>
  );
}

export default Search;
