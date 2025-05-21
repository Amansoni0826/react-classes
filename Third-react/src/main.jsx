import './style.css'
import { createRoot } from 'react-dom/client'
import React from 'react'
import ThirdReactComponent from './componets/Intro';
import Hello from './componets/Hello';
import Chavaa, { Bahubali } from './componets/Movies';
import { Don } from './componets/Movies';
import Number from './componets/Number';
const DefineRoot = document.getElementById("app");

const Root = createRoot(DefineRoot);

const App = () => {
  return <>
    <h1>What is your Name</h1>
    <ThirdReactComponent />
    <Hello />
    <Chavaa />
    <Bahubali />
    <Don />
    <Number />

  </>
}
Root.render(<App />)
