import { useEffect, useRef, useState } from "react";
import MainLayout from "../layouts/main-layout";
import Carte from "../components/Carte"
import Button from "../components/button";
import logo from '../assets/img/logo.png'
import { useNavigate } from "react-router";

export default function Jeu() {
    const [etatJeu, setEtatJeu] = useState({});
    const chatRef = useRef(null);
    const [cleServeur, setReponse] = useState("");
    const stateTimeout = useRef(null)

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
        formData.append("type", $type); // Type

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
            {/* {
                //If parti existe pas, il va crash
                if (typeof maVariable !== "object") {
                    if (maVariable == "GAME_NOT_FOUND") {
                    		// Fin de la partie. Est-ce que j’ai gagné? Je dois appeler user-info
                    }
                }
                else {
                	// maVariable est un objet. On pourrait faire, par exemple, maVariable.game.php ou 
                	// maVariable.player.mp
                }

            } */}
                <div className="w-full h-[18vh] border-2">
                    <div className="text-2xl grid grid-cols-3 w-full h-full font-semibold rounded-md text-gray-900 bg-transparent text-center">
                        <div className=" flex items-center justify-center">
                            {
                                Array.from({length: etatJeu?.opponent?.handSize ?? 0}).map((_,i) => (
                                    <div key={i} className="w-20 h-25 relative z-10 bg-size-[100%_100%] bg-[url('/images/back_card.png')]">
                                    </div>

                                ))
                            }
                        </div>
                        <div className=" flex items-center justify-center gap-4 ">
                            <label>{etatJeu?.opponent?.username}</label>
                            <div className="w-32 h-32 rounded-full bg-[url(/images/warrior.jpg)] bg-cover bg-center border-4 border-black shadow-lg">

                            </div>
                            <label >{etatJeu?.opponent?.heroClass}</label>
                        </div>
                        <div className=" flex flex-col items-end justify-center gap-4 text-5xl">
                            <div className="bg-[url(/images/medical_symbol.png)] w-40 h-15  bg-contain pl-10 bg-no-repeat">
                                {etatJeu?.opponent?.hp}
                            </div>
                            <div className="bg-[url(/images/credit_symbol.png)] w-40 h-15 bg-contain pl-10 bg-no-repeat">
                                {etatJeu?.opponent?.mp}
                            </div>
                            <div className="bg-[url(/images/back_card.png)] w-40 h-15 bg-contain pl-10 bg-no-repeat">
                                {etatJeu?.opponent?.remainingCardsCount}
                            </div>
                        </div>

                    </div>
                </div>
                <div className="w-full h-[30vh] border-2">
                    <div className="text-2xl w-full h-full font-semibold rounded-md  text-gray-900 bg-transparent flex items-center justify-center text-center">
                        {
                            etatJeu?.opponent?.board?.map((carte)=> {
                                    return <Carte key={carte} nom={carte.id} credit={carte.cost} life={carte.hp} description={carte.mechanics.join(", ")} attack={carte.atk} >
                                    </Carte>
                                })
                        }
                        {/* <Carte nom="Anakin" description="Chevalier jedi" credit="10" attack="10" life="200"></Carte> */}
                    </div>
                </div>
                <div className="w-full h-[30vh] border-2">
                    <div className="text-2xl w-full h-full font-semibold rounded-md   text-gray-900 bg-transparent flex items-center justify-center text-center">
                        {
                            etatJeu?.board?.map((carte)=> {
                                    return <Carte key={carte} nom={carte.id} credit={carte.cost} life={carte.hp} description={carte.mechanics.join(", ")} attack={carte.atk} >
                                    </Carte>
                                })
                        }
                        {/* <Carte nom="obi-wan" description="Maitre jedi" credit="12" attack="15" life="250" ></Carte> */}
                    </div>
                </div>
                <div className="w-full h-[25vh] border-2">
                    <div className=" text-2xl w-full h-full font-semibold rounded-md   text-gray-900 bg-transparent flex items-center justify-between text-center">
                        <div className=" w-1/8 h-65 flex flex-col items-start justify-center gap-4 text-5xl">
                            <div className="bg-[url(/images/medical_symbol.png)] w-40 h-15  bg-contain pl-10 bg-no-repeat">
                                {etatJeu?.hp}
                            </div>
                            <div className="bg-[url(/images/credit_symbol.png)] w-40 h-15 bg-contain pl-10 bg-no-repeat">
                                {etatJeu?.mp}
                            </div>
                            <div className="bg-[url(/images/back_card.png)] w-20 h-25 bg-contain pl-20 bg-no-repeat">
                                {etatJeu?.remainingCardsCount}
                            </div>
                        </div>
                        <div className=" w-6/8 h-65 flex gap-5 items-center justify-center">
                            {
                                etatJeu?.hand?.map((carte)=> {
                                    return <Carte key={carte} nom={carte.id} credit={carte.cost} life={carte.hp} description={carte.mechanics.join(", ")} attack={carte.atk} >
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
                                <label>{etatJeu?.remainingTurnTime}</label>
                            </div>
                            
                        </div>
                    </div>
                </div>
        </div>
    </MainLayout>

}