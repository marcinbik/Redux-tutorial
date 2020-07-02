import React from "react";
import { Button, Card, Col, CardBody, CardTitle } from "reactstrap";
import Modal from "../Modal";


const Movie = ({ id, title, onRemove }) => {
  return (
    <Col xs={12} md={4} lg={3}>
      <Card className="my-3">
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <Button color="danger" size="sm" className="mx-3"  onClick={() => onRemove(id)}>
            delete
          </Button>
          <Modal id = {id}/>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Movie;
