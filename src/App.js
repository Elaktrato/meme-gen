import './App.css';
import Meme from "./Meme";
import Controls from "./Controls";
import React, {useEffect, useState} from "react"

function App() {

  const [memes, setMemes] = useState("")

  const [loadingMemes, setLoadingMemes] = useState(true)

  const [captions, setCaptions] = useState(
    { 
      captions:
      [
        {
          id: 1,
          captionText: "sample text",
          captionX: 0,
          captionY: 0
        }
      ]
    }
  )

  const getMemes = async () => {
    const api = "https://api.imgflip.com/get_memes"
    let leMemes;
    try {
      const response = await fetch(api)
      if(response.ok) {
        leMemes = await response.json()
        console.log(leMemes)
      }else{
        return leMemes
      }
    } catch(error) {
      console.log(error)
    }
    return leMemes
  }

  const handleCaptionChange = (capData) =>{
    const newCaptions = captions.captions.map((cap) => {
      if (cap.id !== capData.id) {
        return cap;
      }
      return {
        ...cap,
        captionText: capData.captionText,
      };
    });
    setCaptions({ captions: newCaptions });
  }

  const memeId = () => {
    return Math.floor(Math.random() * 100) 
  }

  useEffect(() =>  {
    async function ourMemes() {
    setMemes(await getMemes());
    setLoadingMemes(false);
    }
  
    ourMemes()
  }, [])


let memeGen;
if(loadingMemes){
  memeGen = "loading..."
}else{
  memeGen = (
    <div>
    <Controls 
    handleCaptionChange={handleCaptionChange}
    captions={captions}
    />
    <Meme 
    memes={memes} 
    memeId={memeId}
    captions={captions}
    />
    </div>
    )
}

  return (
    <div className="App">
      {memeGen}
    </div>
  );
}

export default App;
