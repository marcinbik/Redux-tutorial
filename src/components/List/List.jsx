import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { Row } from "reactstrap"
import {REMOVE_ITEM} from "../../redux/actions/movies"
import  Movie from "../Movie";



const List = () => {
  const movies = useSelector((store) => store.movies);

  const dispatch = useDispatch();

  const handleRemove = id => {
    dispatch({ type: REMOVE_ITEM, id });
  };

  


  return (
    <Row>
      {movies.map(movie => <Movie key={movie.id} {...movie} onRemove={handleRemove}  />)}
    </Row>
  );
};
export default List;
