import React from "react";
import "./style.css";
import { Col, Row, Container } from "../Grid";

function SearchBar() {
  return (
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
              />
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default SearchBar;
