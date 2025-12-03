import { useEffect, useRef, useState } from "react";
import MainLayout from "../layouts/main-layout";
import Button from "../components/button";
import logo from '../assets/img/logo.png'
import { useNavigate } from "react-router";



export default function Loading(){

    return <MainLayout>
        <div className="relative">
            <img
              src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
              alt="Animation"
              className="max-w-md w-full rounded-lg shadow-2xl"
            />
            
            {/* Bouton pour fermer */}
            <button
              onClick={() => setShowOverlay(false)}
              className="absolute top-4 right-4 bg-white text-gray-800 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-200 font-bold"
            >
              ×
            </button>
          </div>
    </MainLayout>
}