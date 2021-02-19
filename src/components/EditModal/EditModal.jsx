import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import FormEdit from "../FormEdit/FormEdit";


const EditModal = ({id, isModalOpen, onEdit , toggle }) => {
  return (
    <Modal id={id} isOpen={isModalOpen} toggle={toggle} >
      <ModalHeader toggle={toggle}>Edit movie{id}</ModalHeader>
      <ModalBody>
        <FormEdit onSubmit={onEdit} id={id} toggle={toggle} />
        {id}
      </ModalBody>
      <ModalFooter>
        <Button  color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditModal;
