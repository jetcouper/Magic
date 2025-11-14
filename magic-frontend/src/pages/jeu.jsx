import { useEffect, useRef, useState } from "react";
import MainLayout from "../layouts/main-layout";
import Carte from "../components/Carte"
import Button from "../components/button";
import logo from '../assets/img/logo.png'
import { useNavigate } from "react-router";

export default function Jeu() {
    const [etatJeu, setEtatJeu] = useState("");
    const fetchState = () => {
	fetch("/api/game-state.php")
	.then(response => response.json())
	.then(response => {
		console.log(response) // <-- État du jeu, ou message comme : LAST_GAME_WON
        setEtatJeu(response.result)
		stateTimeout.current = setTimeout(fetchState, 2000);
	    });
    }
	
    useEffect(() => {
	    stateTimeout.current = setTimeout(fetchState, 1000);

    	return () => {
    		if (stateTimeout.current) clearTimeout(stateTimeout.current);
    	}
    }, []);

    const chatRef = useRef(null);
    const [cleServeur, setReponse] = useState("");
    const stateTimeout = useRef(null)

    const recupererKey = () => {
        fetch("/api/lobby.php")
        .then(response => response.json())
        .then(data => {
            //Réponse du serveur, afficher un message de succès/erreur
            console.log(data);
            setReponse(data);
        })
    }
    const jouer = ($type) =>{
        let formData = new FormData();
        formData.append("key", cleServeur); // $_POST["key"]
        formData.append("type", $type); // $_POST["key"]

        fetch("/api/lobby.php",{ 
            method:"POST",
            body:formData
        })
        .then(response => response.json())
        .then(data => {
            //Réponse du serveur, afficher un message de succès/erreur
            //console.log(data);
            setReponse("");
        })
    }


    let nbCarteEnnemi = 8
    let tab = []
    tab.push(1)
    tab.push(2)
    tab.push(3)
    tab.push(4)
    tab.push(5)
    tab.push(6)
    tab.push(7)
    tab.push(8)






    return <MainLayout title="Jeu" onLoad={recupererKey}>
        <div className="flex flex-col mx-auto md:h-screen bg-amber-500">
            {
                //If parti existe pas, il va crash
            }
                <div className="w-full h-[18vh] border-2">
                    <div className="text-2xl grid grid-cols-3 w-full h-full font-semibold rounded-md text-gray-900 bg-transparent text-center">
                        <div className=" flex items-center justify-center">
                            {
                                Array.from({length: nbCarteEnnemi}).map((_,i) => (
                                    <div key={i} className="w-20 h-25 relative z-10 bg-size-[100%_100%] bg-[url('/images/back_card.png')]">
                                    </div>

                                ))
                            }
                        </div>
                        <div className=" flex items-center justify-center gap-4 ">
                            <label>nom{}</label>
                            <div className="w-32 h-32 rounded-full bg-[url(/images/warrior.jpg)] bg-cover bg-center border-4 border-black shadow-lg">

                            </div>
                            <label >{}</label>
                            class
                        </div>
                        <div className=" flex flex-col items-end justify-center gap-4 text-5xl">
                            <div className="bg-[url(/images/medical_symbol.png)] w-40 h-15  bg-contain pl-10 bg-no-repeat">
                                0
                            </div>
                            <div className="bg-[url(/images/credit_symbol.png)] w-40 h-15 bg-contain pl-10 bg-no-repeat">
                                0
                            </div>
                            <div className="bg-[url(/images/back_card.png)] w-40 h-15 bg-contain pl-10 bg-no-repeat">
                                0
                            </div>
                        </div>

                    </div>
                </div>
                <div className="w-full h-[30vh] border-2">
                    <div className="text-2xl w-full h-full font-semibold rounded-md  text-gray-900 bg-transparent flex items-center justify-center text-center">
                        <Carte nom="Anakin" description="Chevalier jedi" credit="10" attack="10" life="200"></Carte>
                    </div>
                </div>
                <div className="w-full h-[30vh] border-2">
                    <div className="text-2xl w-full h-full font-semibold rounded-md   text-gray-900 bg-transparent flex items-center justify-center text-center">
                        <Carte nom="obi-wan" description="Maitre jedi" credit="12" attack="15" life="250" ></Carte>
                    </div>
                </div>
                <div className="w-full h-[25vh] border-2">
                    <div className=" text-2xl w-full h-full font-semibold rounded-md   text-gray-900 bg-transparent flex items-center justify-between text-center">
                        <div className=" w-1/8 h-65 flex flex-col items-start justify-center gap-4 text-5xl">
                            <div className="bg-[url(/images/medical_symbol.png)] w-40 h-15  bg-contain pl-10 bg-no-repeat">
                                {etatJeu.hp}
                            </div>
                            <div className="bg-[url(/images/credit_symbol.png)] w-40 h-15 bg-contain pl-10 bg-no-repeat">
                                0
                            </div>
                            <div className="bg-[url(/images/back_card.png)] w-20 h-25 bg-contain pl-20 bg-no-repeat">
                                0
                            </div>
                        </div>
                        <div className=" w-6/8 h-65 flex gap-5 items-center justify-center">
                            {
                                tab?.map((carte)=> {
                                    return <Carte key={carte} nom={carte}>

                                    </Carte>
                                })
                            }
                        </div>
                        <div className="flex-col w-1/8 h-65 flex items-center justify-center">
                            <Button className="text-sm" onClick={() => jouer("HERO_POWER")}>
                                hero power
                            </Button>
                            <Button className="text-sm" onClick={() => jouer("END_TURN")}>
                                end turn
                            </Button>
                            <div className="text-5xl grid grid-cols-2 items-center justify-center">
                                <div className="bg-[url(/images/sand-hourglass-timer.png)] w-25 h-25 bg-contain pl-10 bg-no-repeat">
                                
                                </div>
                                <label>0{}</label>
                            </div>
                            
                        </div>
                    </div>
                </div>
        </div>
    </MainLayout>

}