import React from "react";

import { Modal } from "react-bootstrap";

const CustomModal = ({ content, closeModal }) => {
  return (
    <Modal show={true} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>{content.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Name : {content.name}</p>
        <p>Price: ${content.price}</p>
        <p>Description: {content.description}</p>
        <p>Quantity : {content.quantity}</p>
      </Modal.Body>
    </Modal>
  );
};

export default CustomModal;
