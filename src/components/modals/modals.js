// import React, {useState} from "react";
import "./modals.css";

export default function Modals({ HighLight, hide }) {
  // const [highlight, setHighlight] = useState(false)
  //     function render(){
  //         setHighlight(true)
  //     }

  return (
    <div className="h-container">
      <div className="highlight">
        <h3>{HighLight.title} </h3>
        <img src={HighLight.image_url} alt={HighLight.description}></img>

        <p> {HighLight.description} </p>
      </div>

      <div className="close" onClick={hide}>
        X
      </div>
    </div>
  );
}
