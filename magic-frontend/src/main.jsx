import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './css/global.css'
import Login from './pages/login'
import Lobby from './pages/lobby'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/lobby" element={<Lobby />} />
        </Routes>
    </BrowserRouter>
)
