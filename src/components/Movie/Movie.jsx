import React from "react";
import { Button, Card, Col, CardBody, CardTitle, CardText } from "reactstrap";
import Modal from "../Modal";


const Movie = ({ id, title,picture,description, onRemove }) => {
  console.log(picture,description);
  return (
    <Col xs={12} md={4} lg={3}>
      <Card className="my-3">
        <CardBody>
          <img width="100%" src={picture} alt="Card  cap" />
          <CardTitle>{title}</CardTitle>
          <CardText>{description}</CardText>
          <Button color="danger" size="sm" className="mx-3"  onClick={() => onRemove(id)}>
            delete
          </Button><Modal id = {id}/>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Movie;
