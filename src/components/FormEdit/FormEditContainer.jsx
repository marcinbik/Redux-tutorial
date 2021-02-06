import React from "react";
import { useDispatch } from "react-redux";
import Form from "./FormEdit";
import { EDIT_ITEM } from "../../redux/actions/movies";
const FormContainer = () => {
  const dispatch = useDispatch();

  const onEditItem = (data) => {
    const movie = {
      id: data.id,
      title: data.title,
      picture: data.picture,
      description: data.description,
    };
    dispatch({ type: EDIT_ITEM, movie });
  };
  return <Form onSubmit={onEditItem} />;
};

export default FormContainer;
