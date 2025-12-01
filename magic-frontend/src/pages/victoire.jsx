import { useRef } from "react";
import { useNavigate } from "react-router";
import Button from "../components/button";

export default function victoire(){
    const navigate = useNavigate();

    
    const verslobby = () => {
        navigate("/lobby");
    }

    return <div className="z-10 fixed inset-0 flex flex-row items-center justify-center w-full holo-container bg-cyan-800/75">
           <div className="animate-holo-glitch absolute inset-0 pointer-events-none opacity-20 bg-linear-to-r from-cyan-500/20 to-blue-500/20"></div>     
                <h1 className="text-green-500 text-4xl mb-4">
                    victoire
                </h1>
                <Button onClick={() => verslobby()}>
                    quitter
                </Button>
    </div>
}