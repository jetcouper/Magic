import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './css/global.css'
import Login from './pages/login'
import Lobby from './pages/lobby'
import React, { useEffect, useRef } from 'react'

//Ajout de musique de fond
function App() {
    return <h1>Hello world!</h1>
}


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/lobby" element={<Lobby />} />
        </Routes>
    </BrowserRouter>
)
