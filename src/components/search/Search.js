import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faShoppingCart);

const Search = () => {
  return (
    <div className="w-75 mx-auto">
      <Container>
        <Row>
          <Col xs={11}>
            <Form>
              <Form.Group className="" controlId="formBasicText">
                <Form.Control
                  className="py-1 my-2"
                  type="text"
                  placeholder="search here"
                />
              </Form.Group>
            </Form>
          </Col>
          <Col className="d-flex align-items-center" xs={1}>
            <FontAwesomeIcon
              style={{ color: "orange", fontSize: "17px" }}
              icon={faShoppingCart}
            />
            <span className="text-white ms-2 fs-5">0</span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Search;
