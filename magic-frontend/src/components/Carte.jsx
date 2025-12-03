import { useRef } from "react";
import hoverSoundFile from "../audio/hover.wav";
import clickSoundFile from "../audio/click.wav";
import React, { useState } from 'react';

export default function Carte({ onClick, className = "", credit = "", life = "", nom = "", description = "", attack = "", imageURL = "", state = "", mechanics = [] }) {
    const [isActive, setIsActive] = useState(false);

    const changeStyleCarte = () => {
        setIsActive(!isActive);
    }

    const handleClick = (e) => {
        if (onClick) onClick(e);
    };

    // map mechanics to holo color and animation class
    const mechanicToClass = {
        "Charge": { color: 'holo-yellow', anim: 'animate-pulse-glow-yellow' },
        "Taunt": { color: 'holo-indigo', anim: 'animate-pulse-glow-indigo' },
        "Stealth": { color: 'holo-purple', anim: 'animate-pulse-glow-purple' },
        "Confused": { color: 'holo-pink', anim: 'animate-pulse-glow-pink' },
        "Battlecry": { color: 'holo-orange', anim: 'animate-pulse-glow-orange' },
        "Deathrattle": { color: 'holo-green', anim: 'animate-pulse-glow-green' }
    };

    // map state prop to holo color and animation class
    const stateToClass = {
        "IDLE": { color: 'holo-cyan', anim: 'animate-pulse-glow' },
        "SLEEP": { color: 'holo-red', anim: 'animate-pulse-glow-red' }
    };

    // Check color priority: SLEEP state first, then mechanics, then other states
    let holoColor = 'holo-cyan';
    let holoAnim = 'animate-pulse-glow';
    
    // Debug: log mechanics
    //console.log(`Carte "${nom}" - Mechanics:`, mechanics, `State: ${state}`);
    
    // PRIORITY 1: If state is SLEEP, always use red
    if (state === "SLEEP") {
        //console.log(`  -> SLEEP détecté - PRIORITÉ`);
        holoColor = stateToClass["SLEEP"].color;
        holoAnim = stateToClass["SLEEP"].anim;
    }
    // PRIORITY 2: Check for special mechanics
    else if (mechanics && mechanics.length > 0) {
        for (let mechanic of mechanics) {
            // Check if the mechanic string contains any of our keywords
            for (let keyword in mechanicToClass) {
                if (mechanic.includes(keyword)) {
                    //console.log(`  -> Trouvé "${keyword}" dans "${mechanic}"`);
                    holoColor = mechanicToClass[keyword].color;
                    holoAnim = mechanicToClass[keyword].anim;
                    break;
                }
            }
            if (holoColor !== 'holo-cyan') break; // Stop if we found a match
        }
    }
    // PRIORITY 3: Use other states (IDLE)
    else if (stateToClass[state]) {
        //console.log(`  -> Utilise state: ${state}`);
        holoColor = stateToClass[state].color;
        holoAnim = stateToClass[state].anim;
    }
    
    //console.log(`  -> Couleur finale: ${holoColor}`);
    

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