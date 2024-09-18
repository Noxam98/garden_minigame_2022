
import Background from "./components/background/background.jsx";
import Apple from "./components/game/three/apple.jsx";
import {useEffect, useState} from "react";
import Game from "./components/game/game.jsx";

function App() {
    const [mousePos, setMousePos] = useState({x: 0, y: 0})

    useEffect(()=>{
        document.addEventListener('mousemove', (e)=>{
            setMousePos({
                x: e.clientX,
                y: e.clientY
            })
        })
        document.addEventListener('touchmove', (e)=>{
            setMousePos({
                x: e.changedTouches[0].clientX,
                y: e.changedTouches[0].clientY
            })
        })
    }, [])


  return (
    <div className="App">
      <Background/>
        <Game mousePosition={mousePos}/>
    </div>
  )
}

export default App
