import { useRef } from "react";
import hoverSoundFile from "../audio/hover.wav";
import clickSoundFile from "../audio/click.wav";



export default function MainButton( {type = "button", onClick, className = "", text ,children}){
    const hoverSound = useRef(new Audio(hoverSoundFile));
    const clickSound = useRef(new Audio(clickSoundFile));
    
    const handleMouseEnter = () => {
        hoverSound.current.currentTime = 0; // Repartir du début
        hoverSound.current.play();
    };

    const handleClick = (e) => {
        clickSound.current.currentTime = 0;
        clickSound.current.play();
        if (onClick) onClick(e);
    };



    return  <button onClick={handleClick} type={type} className={"relative z-10 bg-size-[100%_100%] bg-[url('/images/button_frame.png')] hover:opacity-50 w-48 h-12 text-white font-bold py-2 px-4 rounded-lg " + className} onMouseEnter={handleMouseEnter}>
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