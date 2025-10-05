import { useState,useRef,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {animate, createScope, createSpring, createDraggable, createTimeline, createTimer} from "animejs";
import {stagger,utils,text as textUtil} from 'animejs';

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
                scale:2,
                loop:true,
                direction:'alternate'
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
            const timeline = createTimeline({
                loop:true,
                direction: 'alternate',
            });
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

function Square3(){
    const squareRef = useRef(null);
    useEffect(()=>{
        if(!squareRef.current){
            return;
        }
        const scope = createScope({root:squareRef.current});
        scope.add(()=>{
            animate(squareRef.current,{
                translateX:100,
                scale:2,
                opacity: .5,
                duration:200,
                delay:400,
                loop:true,
                loopDelay:400,
                ease: 'out(3)',
                alternate: true,
                autoplay: true,
                onBegin:()=>{},
                onLoop:()=>{},
                onUpdate:()=>{},
            })
        })
        return () => scope.revert()
    },[])
    return (
        <div ref={squareRef} className="square3"></div>
    )
}

function Square4(){
    const squareRef = useRef(null);
    useEffect(()=>{
        if(!squareRef.current){
            return;
        }
        const scope = createScope({root:squareRef.current});
        scope.add(()=>{
            animate(squareRef.current,{
                borderRadius:64,
                filter: 'blur(10px)',
                translateX:100,
                'background-color': '#F9F640',
                loop:true,
            })
        })
        return () => scope.revert()
    },[])
    return (
        <div ref={squareRef} className="square4"></div>
    )
}

function Square5(){
    const squareRef = useRef(null);
    useEffect(()=>{
        if(!squareRef.current){
            return;
        }
        const scope = createScope({root:squareRef.current});
        scope.add(()=>{
            animate(squareRef.current,{
                translateX:100,
                rotate:'1turn',
                skew:45,
                loop:true,
            })
        })
        return () => scope.revert()
    },[])
    return (
        <div ref={squareRef} className="square5"></div>
    )
}
function Square6(){
    const sliderRef = useRef(null);
    const textRef = useRef(null);
    useEffect(()=>{
        if(!sliderRef.current||!textRef.current){
            return;
        }
        const scope = createScope({root:sliderRef.current});
        scope.add(()=>{
            animate([sliderRef.current,textRef.current],{
                value:1000,
                alternate: true,
                loop:true,
                modifier: utils.round(0)
            })
        })
        return () => scope.revert()
    },[])
    return (
        <pre className="htmlattributes">
            <input ref={sliderRef} type="range" value="0" min="0" max="1000"/>
            <input  ref={textRef} type="text" value="0" size="5"/>
        </pre>
    )
}
function CharHeader() {
    const textRef = useRef(null);

    useEffect(() => {
        if (!textRef.current) return;

        const text = textRef.current.textContent;
        textRef.current.textContent = '';
        text.split('').forEach(char => {
            const span = document.createElement('span');
            span.textContent = char;
            span.className = 'char';
            textRef.current.appendChild(span);
        });

        animate('.char',{
            translateY: [20, 0],
            opacity: [0.125, 1],
            duration: 800,
            ease: 'easeOutExpo',
            delay: stagger(50),
        });
    }, []);

    return <h2 ref={textRef}>Hello React Vite</h2>;
}

function WordHeader() {
    const textRef = useRef(null);

    useEffect(() => {
        if (!textRef.current) return;

        const text = textRef.current.textContent;
        textRef.current.textContent = '';
        text.split(' ').forEach(word => {
            const span = document.createElement('span');
            span.textContent = word;
            span.className = 'word';
            textRef.current.appendChild(span);
            // Add the space back
            textRef.current.append(' ');
        });

        animate('.word',{
            translateY: [20, 0],
            opacity: [0.125, 1],
            duration: 800,
            ease: 'easeOutExpo',
            delay: stagger(150), // Slower stagger for words
        });
    }, []);

    return <h2 ref={textRef}>Hello React Vite</h2>;
}

function Timer(){
    useEffect(()=>{
        const scope=createScope();
        const [ $time, $count ] = utils.$('.value');
        scope.add(()=>{
            createTimer({
                duration: 1000,
                loop: true,
                frameRate: 30,
                onUpdate: self => $time.innerHTML = self.currentTime,
                onLoop: self => $count.innerHTML = self._currentIteration
            });
        })
    },[])
    return (
        <div className="large centered row">
            <div className="half col">
                <pre className="large log row">
                    <span className="label">current time </span>
                    <span className="value lcd">0</span>
                </pre>
            </div>
            <div className="half col">
                <pre className="large log row">
                    <span className="label">callback fired </span>
                    <span className="value lcd">0</span>
                </pre>
            </div>
        </div>
    )
}

function Timer2(){
    useEffect(()=>{
        const scope=createScope();
        const [ $time, $count ] = utils.$('.value1');
        scope.add(()=>{
            createTimer({
                delay: 1000,
                duration: 1000,
                frameRate: 30,
                onUpdate: self => $time.innerHTML = self.currentTime,
                onLoop: self => $count.innerHTML = self._currentIteration
            });
        })
    },[])
    return (
        <div className="large centered row">
            <div className="half col">
                <pre className="large log row">
                    <span className="label">current time </span>
                    <span className="value1 lcd">0</span>
                </pre>
            </div>
            <div className="half col">
                <pre className="large log row">
                    <span className="label">callback fired </span>
                    <span className="value1 lcd">0</span>
                </pre>
            </div>
        </div>
    )
}

function Timer3(){
    useEffect(()=>{
        const scope=createScope();
        const [ $loops ] = utils.$('.loops');
        const [ $time ] = utils.$('.time');

        let loops = 0;
        scope.add(()=>{
            createTimer({
                loop: true,
                duration: 1000,
                onLoop: () => $loops.innerHTML = ++loops,
                onUpdate: self => $time.innerHTML = self.iterationCurrentTime
            });
        })
    },[])
    return (
        <div className="large centered row">
            <div className="col">
                <pre className="large log row">
                    <span className="label">loops count </span>
                    <span className="loops value">0</span>
                </pre>
            </div>
            <div className="col">
                <pre className="large log row">
                    <span className="label">iteration time </span>
                    <span className="time value lcd">0</span>
                </pre>
            </div>
        </div>
    )
}

function Vire() {
    const headingRef = useRef(null);
    useEffect(() => {
        if (!headingRef.current) {
            return;
        }
        const scope = createScope({root: headingRef.current,});
        scope.add(() => {
            const {words, chars} = textUtil.split(headingRef.current, {
                words: {wrap: 'span', class: 'word'},
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '100px', padding: '20px' }}>
              <Square />
              <Square2 />
              <Square3 />
              <Square4/>
              <Square5/>
              <Square6/>
              <CharHeader/>
              <WordHeader/>
              <Timer/>
              <Timer2/>
              <Timer3/>
          </div>
      </>
  )
}

export default App
