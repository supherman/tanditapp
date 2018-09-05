import React, { Fragment } from 'react';

const Modal = props => {
  return (
    <Fragment>
      {props.show && (
        <div className="react-modal-container">
          <div className="react-modal-overlay" onClick={props.close} />
          <div className="react-modal-panel">{props.children}</div>
        </div>
      )}
    </Fragment>
  );
};

export default Modal;
