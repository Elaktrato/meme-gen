import React from "react";
import { DateTime } from "luxon";

function MemeCaption() {

const uniqueId = () => {
  return DateTime.now().toFormat('x')
}

  return (
    <div className="memeCaptionThingy">
      <label name={`memeCaption${uniqueId()}`} >Meme Caption Text</label>
      <input type="text" id={`memeCaption${uniqueId()}`} name={`memeCaption${uniqueId()}`} />
      <label name={`posLeft${uniqueId()}`} > Position X </label>
      <input type="number" min="0" max="100" name={`posLeft${uniqueId()}`} />
      <label name={`posTop${uniqueId()}`} > Position Y </label>
      <input type="number" min="0" max="100" name={`posTop${uniqueId()}`} />
    </div>
  );
}

export default MemeCaption;
