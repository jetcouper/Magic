import { useRef } from "react";
import hoverSoundFile from "../audio/hover.wav";
import clickSoundFile from "../audio/click.wav";



export default function Carte( {onClick, className = "", text ,children}){
    // const hoverSound = useRef(new Audio(hoverSoundFile));
    // const clickSound = useRef(new Audio(clickSoundFile));
    
    // const handleMouseEnter = () => {
    //     hoverSound.current.currentTime = 0; // Repartir du début
    //     hoverSound.current.play();
    // };

    // const handleClick = (e) => {
    //     clickSound.current.currentTime = 0;
    //     clickSound.current.play();
    //     if (onClick) onClick(e);
    // };



    return <div className={"rounded border border-slate-400 p-1 hover:bg-slate-300 w-48 h-12 " + className}>
                <img>test image</img>
                <text>
                    test
                </text>
                <div class=" col-span-1 rounded-lg h-12">
                    4
                    </div> 
      	        <div class=" rounded-lg h-12">

                    </div> 
                <div class=" rounded-lg h-12">5

                    </div> 
            </div>
}