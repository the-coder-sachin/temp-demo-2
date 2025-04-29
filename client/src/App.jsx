import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [message, setMessage] = useState('')

  const getMessage = async ()=>{
    const response = await fetch(
      "https://temp-demo-2-1.onrender.com/api/message"
    );
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
