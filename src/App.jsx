import { useState,useRef,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {animate, createScope, createSpring, createDraggable, utils} from "animejs";
import {createTimer} from 'animejs';

function Timer(){
    const scope = useRef(null);
    const [$time,$count] = utils.$('.value');
    /*useEffect(()=>{

    })*/
    createTimer({
        duration: 1000,
        loop: true,
        frameRate: 30,
        onUpdate: self => $time.innerHTML = self.currentTime,
        onLoop: self => $count.innerHTML = self._currentIteration
    });
    return (
        <div className="large centered row">
            <div className="half col">
                <pre className="large log row">
                    <span className="label">current time</span>
                    <span className="value lcd">0</span>
                </pre>
            </div>
            <div className="half col">
                <pre className="large log row">
                    <span className="label">callback fired</span>
                    <span className="value lcd">0</span>
                </pre>
            </div>
        </div>
    )
}
function App() {
    const vite = useRef(null);
    const scope=useRef(null);
    const [rotation, setRotation] = useState(0);
    useEffect(()=>{
        scope.current=createScope({vite}).add(self=>{
            animate('.vite',{
                scale:[
                    {to:1.25,ease: 'inOut(3)',duration:500},
                    {to:1,ease:createSpring({stiffness:300})}
                ],
                loop:true,
            });
            createDraggable('.react',{
                container:[0,0,0,0],
                releaseEase: createSpring({stiffness:300}),
            })
        });
        return ()=>scope.current.revert();
    },[])
    const reactanim = useRef(null);
    /*useEffect(()=>{
        scope.current=createScope({reactanim}).add(self=>{
            createDraggable('.react',{
                container:[0,0,0,0],
                releaseEase: createSpring({stiffness:300}),
            })
        });
        return ()=> scope.current.revert();
    },[])*/

  const [count, setCount] = useState(0)

  return (
      <>
          <div>
              <div ref={vite} className="size-bounce">
                  <a href="https://vite.dev" target="_blank">
                      <img src={viteLogo} className="logo vite" alt="Vite logo"/>
                  </a>
              </div>
              <div ref={reactanim} className="dragable">
                  <a href="https://react.dev" target="_blank">
                      <img src={reactLogo} className="logo react" alt="React logo"/>
                  </a>
              </div>
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
          {/*<Timer/>*/}
      </>
  )
}

export default App
