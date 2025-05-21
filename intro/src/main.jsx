import './style.css'
import { createRoot } from 'react-dom/client'
import React from 'react'
import Intro from './components/Intro';

const rootElement = document.getElementById("app");

const root = createRoot(rootElement);

const App = () => {
  return <>
       <h1>Hello, This is react app</h1>
       <Intro/>
 </> 
}

root.render(<App/>)
