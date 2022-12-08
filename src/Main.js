import React from "react";
import "./Main.css";
import bar from "./imges/barPic.png";

function Main() {
  return (
    <>
      <div className="container">
        <div className="info">
          53 views . 28d
          <button className="btn btn-primary btnn" type="submit">
            Next
          </button>
        </div>

        <img className="Barchart" src={bar} alt="charbar" />
      </div>
    </>
  );
}

export default Main;
