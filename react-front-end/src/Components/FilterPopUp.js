import React from "react";
import './FilterPopUp.scss';

export default function FilterPopUp(props) {

    return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        <span onClick={props.save}>{props.savebtn}</span>
      </div>
    </div>
  );

}
