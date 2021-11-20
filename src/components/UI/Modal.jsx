import React, { Fragment } from "react";
import ReactDOM from "react-dom";

const Backdrop = ({ closeModalOnClick }) => {
  return <div className="backdrop" onClick={closeModalOnClick}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className="modal">
      <div className="content">{props.children}</div>
    </div>
  );
};

//helper constant
const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop closeModalOnClick={props.closeModalOnClick} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
