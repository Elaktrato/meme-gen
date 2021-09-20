import React, {useState, useEffect} from "react";
import { DateTime } from "luxon";

function MemeCaption(props) {

const [currentCaption, setCurrentCaption] = useState(props.cap)

const handleChangeText = (event) => {
   setCurrentCaption({...currentCaption, captionText: event.target.value})
   props.handleCaptionChange(currentCaption)
}

const handleChangeX = (event) => {
    setCurrentCaption({...currentCaption, captionX: event.target.value})
    props.handleCaptionChange(currentCaption)
 }

 const handleChangeY = (event) => {
    setCurrentCaption({...currentCaption, captionY: event.target.value})
    props.handleCaptionChange(currentCaption)
 }

const uniqueId = () => {
  return DateTime.now().toFormat('x')
}

  return (
    <div className="memeCaptionThingy">
      <label name={`memeCaption${uniqueId()}`} >Meme Caption Text</label>
      <input type="text" id={`memeCaption${uniqueId()}`} name={`memeCaption${uniqueId()}`} onChange={handleChangeText} value={currentCaption.captionText} />
      <label name={`posLeft${uniqueId()}`} > Position X </label>
      <input type="number" min="0" max="100" name={`posLeft${uniqueId()}`} value={currentCaption.captionX} onChange={handleChangeX} />
      <label name={`posTop${uniqueId()}`} > Position Y </label>
      <input type="number" min="0" max="100" name={`posTop${uniqueId()}`} value={currentCaption.captionY} onChange={handleChangeY} />
    </div>
  );
}

export default MemeCaption;
