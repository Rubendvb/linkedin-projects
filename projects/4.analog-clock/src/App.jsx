import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  const rotateHour = {
    transform: `rotate(${time.getHours() * 30}deg)`,
  }

  const rotateMinutes = {
    transform: `rotate(${time.getMinutes() * 6}deg)`,
  }

  const rotateSecond = {
    transform: `rotate(${time.getSeconds() * 6}deg)`,
  }

  return (
    <div className="clock">
      <div className="cover">
        <div className="hand hour-hand" style={rotateHour}></div>
        <div className="hand minute-hand" style={rotateMinutes}></div>
        <div className="hand second-hand" style={rotateSecond}></div>
      </div>
    </div>
  )
}

export default App
