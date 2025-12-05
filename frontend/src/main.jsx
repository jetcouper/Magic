import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './css/global.css'
import Login from './pages/login'
import Lobby from './pages/lobby'
import Jeu from './pages/jeu'
import React, { useEffect, useRef } from 'react'
import { MusicProvider } from './components/Musique';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <MusicProvider>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/lobby" element={<Lobby />} />
                <Route path="/jeu" element={<Jeu />} />
            </Routes>
        </MusicProvider>
    </BrowserRouter>
)
