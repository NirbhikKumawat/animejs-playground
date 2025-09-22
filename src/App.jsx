import { useState,useRef,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {animate,createScope,createSpring,createDraggable} from "animejs";

function App() {
    const root = useRef(null);
    const scope=useRef(null);
    const [rotation, setRotation] = useState(0);
    useEffect(()=>{
        scope.current=createScope({root}).add(self=>{
            animate('.logo',{
                scale:[
                    {to:1.25,ease: 'inOut(3)',duration:500},
                    {to:1,ease:createSpring({stiffness:300})}
                ],
                loop:true,
            });
        });
        return ()=>scope.current.revert();
    },[])
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <div ref={root} className="size-bounce">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
          </div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
