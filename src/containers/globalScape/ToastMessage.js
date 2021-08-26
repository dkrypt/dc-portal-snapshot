import React, { useState } from "react";
// import {Toast} from 'react-bootstrap';
import Toast from "react-bootstrap/Toast";
// import ToastContainer from "react-bootstrap/ToastContainer";

const ToastMessage = ({showToast,updateToast,toastMessage}) => {
 // const [show, setShow] = useState(true);
  return (
 
      // <Toast
      //   show={true}
      //   delay={3000}
      //   autohide
      //   // style={{ position: "absolute", top: 0 }}
      //   className="d-inline-block m-1 gs-toast"
      //   bg="success"
      // >
      <Toast className="d-inline-block m-1 gs-toast" onClose={() => updateToast(false,'')} show={showToast} delay={3000} autohide>
         {/* <Toast onClose={() => this.setState({showToast:false})} show={this.state.showToast} delay={3000} autohide>  */}
        {/* <Toast.Header> */}
      {/* <img
        src="holder.js/20x20?text=%20"
        className="rounded me-2"
        alt=""
      />
      <strong className="me-auto">Bootstrap</strong> */}
  
    {/* </Toast.Header> */}
        <Toast.Body className="success text-white">
         {toastMessage}
        </Toast.Body>
        <div className="Toastify__progress-bar Toastify__progress-bar--animated Toastify__progress-bar--success"></div>
      </Toast>

  );
};

export default ToastMessage;

