import React from "react"
import CaptionText from "./CaptionText"

function Meme(props) {
  let ourMemeId = props.memeId()
  console.log(props)
  return (
    <div className="memeinator">
      <img className="memeImg" src={props.memes.data.memes[ourMemeId].url} />
      {props.captions.captions.map(
        (caption) => 
            {
              return <CaptionText caption={caption} />
            }
          )
        }
    </div>
  );
}

export default Meme;
