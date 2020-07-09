import React from "react";
import lodash from "lodash";
import { useDispatch } from "react-redux";
import { ADD_ITEM } from "../../redux/actions/movies";
import Form from "./Form";
const FormContainer = () => {
  const dispatch = useDispatch();

  const onNewItem = (data) => {
    const movie = {
      id: lodash.uniqueId(),
      title: data.title,
      picture: data.picture,
      description: data.description,
    };
    dispatch({ type: ADD_ITEM, movie });
  };
  return <Form onSubmit={onNewItem} />;
};

export default FormContainer;
