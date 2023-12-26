import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Gmembers from'./gpmembers'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h2>Group members:</h2>
    <div>
   <Gmembers />
  </div>
   
  </>
  );
}

export default App;
