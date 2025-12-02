import { useNavigate } from "react-router";
import Button from "../components/button";

export default function Victoire() {
    const navigate = useNavigate();

    const verslobby = () => {
        navigate("/lobby");
    }

    return (
        <div className="relative text-center rounded-2xl holo-container bg-cyan-800/75 p-4">
            <div className="animate-holo-glitch absolute inset-0 pointer-events-none opacity-20 bg-linear-to-r from-cyan-500/20 to-blue-500/20"></div>
            <h1 className="text-green-500 text-4xl mb-4">Victoire</h1>
            <p className="text-sm text-gray-700 mb-4">Félicitations, vous avez gagné !</p>
            <Button onClick={verslobby}>Quitter</Button>
        </div>
    );
}