import './style.css'
import { createRoot } from 'react-dom/client'
import React from 'react'
import FirstPrograme from './components/FirstReact';

const rootElement = document.getElementById("app");

const root = createRoot(rootElement);

const App = () => {
  return <>
    <h1>Hello, This is react app</h1>
    <FirstPrograme />
  </>
}
root.render(<App />)