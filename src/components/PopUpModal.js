import React, { useState } from "react";
import { Modal, Button, Table } from "react-bootstrap";

import Users from "../containers/threadConnect/Users";

export default function PopUpModal(props) {
  var show = props.showModal;

  return (
    <>
      <Modal show={show} onHide={props.onClose.bind(this, false)}>
        <Modal.Header closeButton>
          <Modal.Title>{props.modalName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.modalName == "Users" ? <Users /> : ""}</Modal.Body>
        {/* might need in future
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer> */}
      </Modal>
    </>
  );
}
