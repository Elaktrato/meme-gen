import React from "react";
import MemeCaption from "./MemeCaption";

function Controls(props) {
console.log(props)
  return (
    <div className="controls">
      {props.captions.captions.map((cap) => {
       return( <MemeCaption 
        cap={cap}
        handleCaptionChange={props.handleCaptionChange} 
      />)})}
    </div>
  );
}

export default Controls;
