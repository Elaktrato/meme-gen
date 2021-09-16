import './App.css';
import Meme from "./Meme";
import Controls from "./Controls";
import React, {useEffect, useState} from "react"

function App() {

  const [memes, setMemes] = useState("")

  const [loadingMemes, setLoadingMemes] = useState(true)

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
  
  useEffect(() =>  {
    async function ourMemes() {
    setMemes(await getMemes());
    setLoadingMemes(false);
    }
  
    ourMemes()
  }, [])

const memeId = () => {
  return Math.floor(Math.random() * 100) 
}



let memeGen;
if(loadingMemes){
  memeGen = "loading..."
}else{
  memeGen = (
    <div>
    <Controls />
    <Meme 
    memes={memes} 
    memeId={memeId}
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
