import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Form from "../Form/Form";


const EditModal = ({id, isModalOpen, onEdit , toggle }) => {
  return (
    <Modal isOpen={isModalOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Edit movie</ModalHeader>
      <ModalBody>
        <Form onSubmit={onEdit} id={id} toggle={toggle} />
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
