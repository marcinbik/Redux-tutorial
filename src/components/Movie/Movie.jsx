import React from "react";
import { Button, Card, Col, CardBody, CardTitle, CardText, ButtonGroup } from "reactstrap";
import Modal from "../Modal";

const Movie = ({ movie: {id, title, picture, description}, onRemove, onEdit, isModalOpen, toggle }) => {
  
  return (
    <Col xs={12} md={4} lg={3}>
      <Card className="my-3">
        <CardBody>
          <img width="100%" src={picture} alt="Card  cap" />
          <CardTitle>{title}</CardTitle>
          <CardText>{description}</CardText>
          <ButtonGroup>
          <Button
            color="danger"
            size="sm"
            className="mx-3"
            onClick={() => onRemove(id)}
          >
            delete
          </Button>
          <Button 
            color="warning"
            size="sm"
            className="mx-3"
            onClick={() => toggle()} >edit</Button>
          <Modal id={id} onEdit={onEdit} isModalOpen={isModalOpen} toggle={toggle} />
          </ButtonGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Movie;
