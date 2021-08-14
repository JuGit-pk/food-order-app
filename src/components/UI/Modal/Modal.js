import React from "react";
import "./Modal.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClick}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className="modal">
      <div className="content">{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  const element = document.getElementById("overlay");
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClick={props.onHideCart} />, element)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        element
      )}
    </>
  );
};

export default Modal;
