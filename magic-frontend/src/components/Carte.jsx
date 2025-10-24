import { useRef } from "react";
import hoverSoundFile from "../audio/hover.wav";
import clickSoundFile from "../audio/click.wav";



export default function Carte( {onClick, className = ""}){
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



    return <div className={"text-[10px] rounded border border-slate-400 p-1 hover:bg-slate-300 w-36 h-56 justify-items-center " + className}>
                <img className="rounded border w-25 h-25 justify-center " src="/images/sabre.jpg" />
                <div className="rounded border w-35 h-10 text-left ">
                    <label className="ml-2">
                    Minion
                    </label>
                </div>
                
                <div className="rounded border w-35 h-15 col-span-1 ">
                    Je suis un personnage faible.
                    </div> 
      	        <div className="rounded border w-35 h-5 flex justify-between px-2">
                    <div className="rounded-lg ">
                        V
                    </div> 
                    <div className="rounded-lg ">
                        D
                    </div> 
                </div> 
                
            </div>
}