import React from "react";
import { Button, Card, Col, CardBody, CardTitle, CardText, ButtonGroup } from "reactstrap";

import EditModal from "../EditModal";

const Movie = ({ movie: { id, title, picture, description}, onRemove, onEdit, isModalOpen, toggle }) => {
  //error modal render always in movie with last number id  
  return (
    <Col xs={12} md={4} lg={3}>
      <Card className="my-3">
        <CardBody>
          <img width="100%" src={picture} alt="Card  cap" />
          <CardTitle>{title} {id}</CardTitle>
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
            id={id}
            color="warning"
            size="sm"
            className="mx-3"
            onClick={() => toggle()} >edit{id}</Button>
          <EditModal id={id} onEdit={onEdit} isModalOpen={isModalOpen} toggle={toggle} />  
          </ButtonGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Movie;
