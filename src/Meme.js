import React from "react"
import CaptionText from "./CaptionText"

function Meme(props) {
  let ourMemeId = props.memeId()
  console.log(ourMemeId)
  return (
    <div className="memeinator">
      <img className="memeImg" src={props.memes.data.memes[ourMemeId].url} />
      <CaptionText />
    </div>
  );
}

export default Meme;
