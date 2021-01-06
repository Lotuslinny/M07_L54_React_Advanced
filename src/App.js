// This code is just an example. It will not work without the dependency Randomcolor.
import React, { useState, useEffect } from "react"
import randomcolor from "randomcolor" // a dependency

function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState("")

  useEffect(() => {
    const intervalId = setInterval(() => {
      // setCount(prevCount => prevCount + 1)
    }, 1000)
    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    setColor(randomcolor())
  }, [count])

  return (
    <div>
      <h1 style={{ color: color }}>{count}</h1>
    </div>
  )
}

export default App
