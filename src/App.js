import logo from './logo.svg';
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

  return (
    <div className="App">
      <Controls />
      <Meme memes={memes} />
    </div>
  );
}

export default App;
