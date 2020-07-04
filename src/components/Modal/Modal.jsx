import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Form from "../Form";
import { useDispatch } from "react-redux";
import { EDIT_ITEM } from "../../redux/actions/movies";

const EditModal = (props) => {
  const { buttonLabel = "edit", id } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const dispatch = useDispatch();

  const handleEdit = (data) => {
    console.log(id);
    const movie = { id: id, title: data.title };
    dispatch({ type: EDIT_ITEM, movie });
    toggle();
  };

  return (
    <div>
      <Button color="warning" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit movie</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleEdit} />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default EditModal;
