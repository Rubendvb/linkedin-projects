import { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [runningTimer, setRunningTimer] = useState(false)

  const countStop = () => {
    setRunningTimer(false)
  }

  const restartCount = () => {
    countStop()
    setCount(10)
  }

  const runningCount = () => {
    restartCount()
    setRunningTimer(true)
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (runningTimer) {
        if (count === 0) {
          countStop()
        } else {
          setCount((prev) => prev - 1)
        }
      }
    }, 500)

    return () => {
      clearInterval(intervalId)
    }
  }, [count, runningTimer])

  return (
    <>
      <div className={`text-center pt-5 ${count == 0 ? 'text-danger' : ''}`}>
        <h1 className="display-2">{count}</h1>

        {runningTimer ? (
          <button className="btn btn-danger" onClick={countStop}>
            Stop
          </button>
        ) : (
          <button className="btn btn-primary" onClick={runningCount}>
            Play
          </button>
        )}

        <button className="btn btn-primary mx-2" onClick={restartCount}>
          Restart
        </button>
      </div>
    </>
  )
}

export default App
