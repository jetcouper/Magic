import { useRef } from "react";
import hoverSoundFile from "../audio/hover.wav";
import clickSoundFile from "../audio/click.wav";



export default function Carte( {onClick, className = "", credit = "" , life = "", nom = "",description = "", attack = "", imageURL = ""}){
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



    return <div className={"text-gray-200 relative text-[10px] rounded border bg-gray-950 border-slate-400 p-1 hover:bg-slate-600 w-36 h-56 justify-items-center " + className}>
                <img className="rounded border w-25 h-25 justify-center " src="/images/sabre.jpg" />
                <div className="rounded border-0 w-5 h-5 absolute top-0 -left-6 bg-[url(/images/credit_symbol.png)] bg-cover bg-no-repeat ">
                    <p className="absolute text-[12px] top-0 left-7 opacity-75 ">
                        {credit}
                    </p>
                </div>
                
                <div className="rounded border w-35 h-10 text-left ">
                    <label className="ml-2" >
                    {nom}
                    </label>
                </div>
                
                <div className="rounded border w-35 h-15 col-span-1 ">
                    {description}
                    </div> 
      	        <div className="rounded border w-35 h-5 flex justify-between px-2">
                    <div className="rounded-lg ">
                        {attack}
                    </div> 
                    <div className="rounded-lg w-5 h-5 absolute top-51 left-36 bg-[url(/images/medical_symbol.png)] bg-cover bg-no-repeat ">
                        <p className="absolute text-[12px] top-0 -left-8 opacity-75 ">
                            {life}
                        </p>
                    </div> 
                </div> 
                
            </div>
}