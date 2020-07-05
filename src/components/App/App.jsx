import React from "react";
import List from "../List";
import { Container } from "reactstrap";
import Form from "../Form";
import lodash from "lodash";
import { useDispatch } from "react-redux";
import { ADD_ITEM } from "../../redux/actions/movies";

const App = () => {
  const dispatch = useDispatch();
  
  const onNewItem = (data) => {
    const movie = { id: lodash.uniqueId(), title: data.title, picture: data.picture, description: data.description };
    dispatch({ type: ADD_ITEM, movie });
  };
  return (
    <Container>
      <Form onSubmit={onNewItem} />
      <List />
    </Container>
  );
};

export default App;
