import './style.css'
import { createRoot } from 'react-dom/client'
import React from 'react'
import Introduction from './compnents/intro';

const Root = document.getElementById("app");

const DefineRoot = createRoot(Root)
    const App = () => {
        return <>
            <h1>Hello, This is react app</h1>
            <Introduction />
        </>
    }
DefineRoot.render(<App/>)