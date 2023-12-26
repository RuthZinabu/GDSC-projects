import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'
import {useState} from 'react'
function App() {
   const[notes,setNotes]=useState([])
   const[showForm,setshowForm]=useState(false)
  return (
    <main className="App">
    {showForm && <Form />}

    <button onClick={()=>{
      setshowForm((prev)=> {
    return !prev;
  });
    }} className="show-btn"
    >

      {showForm ? "-" :"+"}
      </button>
  <main/>
  );
}

export default App;
