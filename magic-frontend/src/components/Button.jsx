import { useRef } from "react";
import hoverSoundFile from "../audio/hover.wav";
import clickSoundFile from "../audio/click.wav";



export default function MainButton( {type = "button", onClick, className = "", text, children, disabled = false}){
    const hoverSound = useRef(new Audio(hoverSoundFile));
    const clickSound = useRef(new Audio(clickSoundFile));
    
    const handleMouseEnter = () => {
        if (disabled) return;
        hoverSound.current.currentTime = 0; // Repartir du début
        hoverSound.current.play();
    };

    const handleClick = (e) => {
        if (disabled) return;
        clickSound.current.currentTime = 0;
        clickSound.current.play();
        if (onClick) onClick(e);
    };

    const disabledClass = disabled ? "opacity-50 cursor-not-allowed hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:bg-cyan-400" : "hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.8)]";

    return  <button onClick={handleClick} type={type} disabled={disabled} className={"relative z-10 text-cyan-900 bg-cyan-400 focus:ring-4 focus:outline-none focus:ring-cyan-500/50 font-bold rounded-lg text-sm px-5 py-2.5 text-center transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.5)] " + disabledClass + " " + className} onMouseEnter={handleMouseEnter}>
                {text ?? children}
            </button>
            
}



// export default function MainButton ({children, className = "", onClick}) {
//     return (
//         <button
//   className={"bg-slate-500 text-white py-2 px-4 rounded cursor-pointer " + className}
//   onClick={onClick}>
//             {children}
//         </button>
//     );
// }