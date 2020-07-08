import React, { useState } from "react";
import { REMOVE_ITEM, EDIT_ITEM } from "../../redux/actions/movies";
import { useDispatch } from "react-redux";
import List from "./List";

const ListContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const toggle = () =>{
    setIsModalOpen(!isModalOpen)
  }

  const handleRemove = (id) => {
    dispatch({ type: REMOVE_ITEM, id });
  };

  const handleEdit = (id, data) => {
    const movie = { id, ...data };
    dispatch({ type: EDIT_ITEM, movie });
  };

  return <List onRemove={handleRemove} onEdit={handleEdit} isModalOpen={isModalOpen} toggle={toggle} />;
};

export default ListContainer;
