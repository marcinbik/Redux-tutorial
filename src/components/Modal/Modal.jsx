import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Form from "../Form";

const EditModal = ({ buttonLabel = "edit", isModalOpen, onEdit, toggle }) => {
  return (
    <Modal isModalOpen={isModalOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Edit movie</ModalHeader>
      <ModalBody>
        <Form onSubmit={onEdit} />
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditModal;
