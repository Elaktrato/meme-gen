import React from "react";

function CaptionText(props) {
  return (
    <div className="memeCaptionText" style={{top: `${props.caption.captionY}%`, left: `${props.caption.captionX}%`}}>
      <div className="leCaption">{props.caption.captionText}</div>
    </div>
  );
}

export default CaptionText;