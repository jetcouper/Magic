import { useNavigate } from "react-router";
import Button from "../components/button";

export default function Deck({ close, recupererCle }) {

    return (
        <div className="z-10 fixed inset-0 flex flex-row items-center justify-center w-full holo-container bg-cyan-800/75">
            <div className="relative text-center rounded-2xl holo-container bg-cyan-800/75 w-[90vw] h-[90vh] flex flex-col p-6">
                <div className="animate-holo-glitch absolute inset-0 pointer-events-none opacity-20 bg-linear-to-r from-cyan-500/20 to-blue-500/20"></div>
                <div className="flex-1 relative z-10 mb-4 overflow-auto [&::-webkit-scrollbar]:w-4 [&::-webkit-scrollbar-track]:bg-cyan-800 [&::-webkit-scrollbar-thumb]:bg-cyan-300 [&::-webkit-scrollbar-thumb]:rounded-full">
                    <iframe
                        className="w-full h-full rounded-lg"
                        src={`https://magix.apps-de-cours.com/server/deck/${recupererCle}`}
                    />
                </div>
                <div className="relative z-10 text-center">
                    <Button onClick={close}>Fermer</Button>
                </div>
            </div>
        </div>
    );
}