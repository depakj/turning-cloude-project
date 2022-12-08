import React from "react";
import "./Main2.css"

import bar from "./imges/barPic.png";
function Main2()
{
    return (
        <>
        <div className="para">
        <div className="container">
        <div className="info">
          <span>53 views . 28d</span>
          <div>
              <img className="dots" src="https://img.icons8.com/ios-glyphs/30/000000/ellipsis.png" alt="dots"/>
          </div>
          <button className="btn btn-primary btnn "type="submit">
            Next
          </button>
        
            <img  className="Barchart" src={bar} alt=""/>
        </div>
        </div>
        </div>
        </>
    );
}

export default Main2;