import { useEffect, useState } from 'react'
import TopNav from './components/TopNav'
import './App.css'

function App() {
  const [message, setMessage] = useState("")

  useEffect(() => {
    fetch("http://localhost:5000/message")
    .then(res => res.json())
    .then(data => {
      setMessage(data.message)
      console.log(data)
    })
  }, [])
  
  return (
    <>
      <TopNav/>
      <h1>Hello World</h1>
      <p>Message: {message}</p>
    </>
  )
}

export default App
