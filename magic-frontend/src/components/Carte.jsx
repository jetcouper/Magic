import { useRef } from "react";
import hoverSoundFile from "../audio/hover.wav";
import clickSoundFile from "../audio/click.wav";
import React, { useState } from 'react';

export default function Carte({ onClick, className = "", credit = "", life = "", nom = "", description = "", attack = "", imageURL = "", state = "" }) {
    const [isActive, setIsActive] = useState(false);

    const changeStyleCarte = () => {
        setIsActive(!isActive);
    }

    const handleClick = (e) => {
        if (onClick) onClick(e);
    };


    // map state prop to holo color and animation class
    const stateToClass = {
        "IDLE": { color: 'holo-cyan', anim: 'animate-pulse-glow' },
        "selected": { color: 'holo-green', anim: 'animate-pulse-glow-green' },
        "SLEEP": { color: 'holo-red', anim: 'animate-pulse-glow-red' },
        "buffed": { color: 'holo-green', anim: 'animate-pulse-glow-green' },
        "exhausted": { color: 'holo-yellow', anim: 'animate-pulse-glow-yellow' }
    };

    const { color: holoColor, anim: holoAnim } = stateToClass[state] || { color: 'holo-cyan', anim: 'animate-pulse-glow' };
    
    // Debug: log the state to see what's received
    //console.log(`Carte ${nom} - State reçu: "${state}" -> Couleur: ${holoColor}, Animation: ${holoAnim}`);

    return (
        <div 
            onClick={handleClick} 
            className={`text-gray-200 relative rounded border bg-gray-950 border-slate-400 flex flex-col ${className}`}
        >
            {/* holo overlay depends on state, with matching pulse animation */}
            <div className={`holo-overlay ${holoColor} ${holoAnim} rounded absolute pointer-events-none`}></div>
            {/* Symbole de crédit - DÉCALÉ à gauche */}
            <div className="absolute top-0 -left-5 w-4 h-4 bg-[url(/images/credit_symbol.png)] bg-cover bg-no-repeat z-10">
                <p className="absolute text-[9px] font-bold top-0 left-6 text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                    {credit}
                </p>
            </div>

            {/* Image de la carte - CENTRÉE */}
            <div className="w-full h-[35%] p-1 flex items-center justify-center">
                <img 
                    className="rounded border max-w-[75%] max-h-full object-contain" 
                    src="/images/sabre.jpg" 
                    alt={nom}
                />
            </div>

            {/* Nom de la carte */}
            <div className="px-1 py-0.5 text-center border-t border-slate-400">
                <label className="text-[0.55em] font-semibold leading-tight line-clamp-1 block">
                    {nom}
                </label>
            </div>

            {/* Description - PLUS D'ESPACE */}
            <div className="flex-1 px-1 py-1 border-t border-slate-400 overflow-hidden">
                <p className="text-[0.45em] leading-tight line-clamp-4">
                    {description}
                </p>
            </div>

            {/* Stats du bas - Attaque et Vie - TEXTE RÉDUIT */}
            <div className="px-1 py-0.5 border-t border-slate-400 flex justify-between items-center relative text-[0.65em]">
                {/* Attaque */}
                <div className="font-bold">
                    {attack}
                </div>

                {/* Vie avec symbole médical - DÉCALÉ à droite */}
                <div className="absolute -right-5 top-0 w-4 h-4 bg-[url(/images/medical_symbol.png)] bg-cover bg-no-repeat">
                    <p className="absolute text-[9px] font-bold top-0 -left-6 text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                        {life}
                    </p>
                </div>
            </div>
        </div>
    );
}