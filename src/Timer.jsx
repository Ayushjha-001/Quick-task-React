import {useState,useRef, useEffect} from 'react'
export default function Timer(){
    const timerId= useRef(null)
    const initialtime= 25*60
    const[timeLeft,setTimeLeft]=useState(()=>{
        const savedTime= localStorage.getItem("timeLeft")
        return savedTime? Number(savedTime):initialtime
    })
    useEffect(()=>{
        localStorage.setItem("timeLeft",timeLeft)
    },[timeLeft])
    const[isRunning,setisRunning]=useState(()=>{
        const saved= localStorage.getItem("isRunning")
        return saved==="true"
    })
    useEffect(()=>{
        localStorage.setItem("isRunning",isRunning)
        },[isRunning]
    )
    useEffect(()=>{
        if(isRunning){
            handleStartTimer()
        }
    },[])
    const min=Math.floor(timeLeft/60)
    const sec=timeLeft%60
    const duration=`${String(min).padStart(2,0)}:${String(sec).padStart(2,0)}`
const handleStartTimer=()=>{
    if(timerId.current)return
    setisRunning(true)
     timerId.current=(setInterval(()=>{
       setTimeLeft(prev=>{
        if(prev<=0){
            clearInterval(timerId.current)
            timerId.current=null
            return 0
        }
        return prev-1
       })
    },1000))
}
const handleStopTimer=()=>{
    clearInterval(timerId.current)
    setisRunning(false)
    timerId.current=null
}
const handleResetButton=()=>{
    clearInterval(timerId.current)
    timerId.current=null
    setisRunning(false)
    setTimeLeft(initialtime)
}
    return(
        <section className="timer-section">
<h2>Pomodoro Focus Timer</h2>
     <div className="timer-display">Time left: <span >{duration}</span></div>
        <div className="timer-buttons">
            <button className="timer-btn" onClick={handleStartTimer}>Start Timer</button>
            <button className="timer-btn"onClick={handleStopTimer}>Stop Timer</button>
            <button  className="timer-btn" onClick={handleResetButton}>Reset timer</button>
        </div>
        </section>
    )
}