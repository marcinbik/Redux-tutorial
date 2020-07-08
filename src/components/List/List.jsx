import React from "react";
import { useSelector } from "react-redux";

import { Row } from "reactstrap";

import  Movie from "../Movie";



const List = ({ onRemove, onEdit, isModalOpen, toggle }) => {
  const movies = useSelector((store) => store.movies);


  return (
    <Row>
      {movies.map(movie => <Movie key={movie.id} movie={movie} onRemove={onRemove} isModalOpen={isModalOpen} onEdit={onEdit} toggle={toggle} />)}
    </Row>
  );
};
export default List;
