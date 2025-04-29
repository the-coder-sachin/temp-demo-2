import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [message, setMessage] = useState('')

  const getMessage = async ()=>{
    const response = await fetch("http://localhost:5000/api/message");
    const data = await response.json();
    console.log(data.message);
    setMessage(data.message)
  }

  return (
   <>
   <h4>this is a normal react page</h4>
   <button onClick={getMessage}>click me to connect to server</button>
   <br />
   <hr />
   <i>its a message from backend : {message || 'not recieved yet'}</i>
   </>
  )
}

export default App
