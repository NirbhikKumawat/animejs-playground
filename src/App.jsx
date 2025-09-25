import { useState,useRef,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {animate, createScope, createSpring, createDraggable, createTimeline} from "animejs";
import {stagger,text as textUtil} from 'animejs';

function Square(){
    const squareRef = useRef(null);
    useEffect(()=>{
        if(!squareRef.current){
            return;
        }
        const scope = createScope({root:squareRef.current});
        scope.add(()=>{
            animate(squareRef.current,{
                translateX:100,
                scale:2
            })
        })
        return () => scope.revert()
    },[])
    return (
        <div ref={squareRef} className="square"></div>
    )
}

function Square2(){
    const squareRef = useRef(null);
    useEffect(()=>{
        if(!squareRef.current){
            return;
        }
        const scope = createScope({root:squareRef.current});
        scope.add(()=>{
            const timeline = createTimeline();
            timeline.add(squareRef.current,{
                translateX:100,
            });
            timeline.add(squareRef.current,{
                scale:2
            })
        })
        return () => scope.revert()
    },[])
    return (
        <div ref={squareRef} className="square2"></div>
    )
}

function Vire(){
    const headingRef = useRef(null);
    useEffect(() => {
        if(!headingRef.current){
            return;
        }
        const scope = createScope({root:headingRef.current,});
        scope.add(()=>{
            const {words,chars} = textUtil.split(headingRef.current,{
                words:{wrap:'span',class:'word'},
                chars:true,
            });
            animate(chars,{
                y:[
                    {to:'-2.75rem',ease : 'outExpo',duration:600},
                    {to:0,ease:'outBounce',duration:800,delay:100}
                ],
                rotate:{
                    from:'-1turn',
                    delay:0
                },
                delay:stagger(50),
                ease: 'inOutCirc',
                loopDelay:1000,
                loop:true
            })
        })
        return () => scope.revert()
    }, []);
    return (
        <h1 ref={headingRef}>Vite + React</h1>
    )
}
function App() {
    const vite = useRef(null);
    const reactanim = useRef(null);
    const [rotation, setRotation] = useState(0);
    useEffect(()=>{
        const animationScope = createScope({
            vite: vite.current,
            reactanim: reactanim.current,
        }).add(()=>{
            animate('.vite',{
                scale:[
                    {to:1.25,ease:'inOut(3)',duration:500},
                    {to:1,ease: createSpring({stiffness:300})}
                ],
                loop:true,
            });

            createDraggable('.react',{
                container:[0,0,0,0],
                releaseEase:createSpring({stiffness:300})
            });
        });
        return ()=>animationScope.revert();
    },[])


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
          <Vire/>
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
          <Square />
          <Square2 />
      </>
  )
}

export default App
