import { useEffect, useRef, useState } from "react";
import MainLayout from "../layouts/main-layout";
import Carte from "../components/Carte"
import Button from "../components/button";
import logo from '../assets/img/logo.png'
import { useNavigate } from "react-router";
import cartes from "../javascript/cartes";


export default function Jeu() {
    const [etatJeu, setEtatJeu] = useState({});
    const [messageErreur, setMessageErreur] = useState("")
    const chatRef = useRef(null);
    const [cleServeur, setReponse] = useState("");
    const [maCarte, setMaCarte] = useState({})
    const [carteAdverse, setCarteAdverse] = useState({})
    const [showMessage, setShowMessage] = useState(false);
    const stateTimeout = useRef(null)
    const cartejeu = cartes

    useEffect(() => {
        if (messageErreur != "") {
            setShowMessage(true);
            setTimeout(() => { setShowMessage(false) }, 3000);
        }
    }, [messageErreur]);

    const fetchState = () => {
        fetch("/api/game-state.php")
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setEtatJeu(response.result)
                stateTimeout.current = setTimeout(fetchState, 2000);
            });
    }

    useEffect(() => {
        stateTimeout.current = setTimeout(fetchState, 1000);

        return () => {
            if (stateTimeout.current) {
                clearTimeout(stateTimeout.current);
            }

        }
    }, []);

    const recupererKey = () => {
        fetch("/api/lobby.php")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setReponse(data);
            })
    }

    const choisirCardBoard = ($carte) => {
        setMaCarte($carte)
    }

    const attaque = ($type, $carte, $carteAdverse) => {
        if ($carte != null) {
            let formData = new FormData();
            formData.append("key", cleServeur);
            formData.append("type", $type);
            formData.append("uid", $carte);
            formData.append("targetuid", $carteAdverse)

            fetch("/api/jeu.php", {
                method: "POST",
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                    if (typeof data !== "object") {
                        setMessageErreur(data)
                        if (data == "GAME_NOT_FOUND") {
                            // Fin de la partie
                        }
                    }
                    else {
                        console.log(data)
                        setEtatJeu(data)
                    }
                    setCarteAdverse($carteAdverse);
                })
        }
    }

    const jouerBouton = ($type) => {
        let formData = new FormData();
        formData.append("key", cleServeur);
        formData.append("type", $type);
        console.log("hero ou end")
        fetch("/api/jeu.php", {
            method: "POST",
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (typeof data !== "object") {
                    setMessageErreur(data)
                    if (data == "GAME_NOT_FOUND") {
                        // Fin de la partie
                    }
                }
                else {
                    console.log(data)
                    setEtatJeu(data)
                }
            })
    }

    const choisir = ($type, $carte) => {
        let formData = new FormData();
        formData.append("key", cleServeur);
        formData.append("type", $type);
        formData.append("uid", $carte);
        fetch("/api/jeu.php", {
            method: "POST",
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (typeof data !== "object") {
                    setMessageErreur(data)
                    if (data == "GAME_NOT_FOUND") {
                        // Fin de la partie
                    }
                }
                else {
                    console.log(data)
                    setEtatJeu(data)
                }
            })
    }

    return <MainLayout title="Jeu" onLoad={recupererKey}>
        <div className="flex flex-col mx-auto md:h-screen">
            <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover -z-10">
                <source src={"/video/battle-of-geonosis-star-wars.3840x2160.mp4"} type="video/mp4" />
            </video>

            {/* Zone adversaire - avec overflow contrôlé */}
            <div className="w-full h-[20%] border-2 gap-2 holo-container p-4 text-cyan-300 border-cyan-300/40 bg-cyan-900/10 backdrop-blur-sm relative overflow-hidden scan-lines">
                <div className="animate-holo-glitch absolute inset-0 pointer-events-none opacity-20 bg-linear-to-r from-cyan-500/20 to-blue-500/20"></div>
                <div className="text-2xl grid grid-cols-3 w-full h-full font-semibold text-center">

                    {/* Cartes en main adversaire - avec overflow géré */}
                    <div className="flex items-center justify-center overflow-hidden">
                        <div className="flex items-center justify-center">
                            {
                                Array.from({ length: etatJeu?.opponent?.handSize ?? 0 }).map((_, i) => (
                                    <div key={i} className="w-16 h-20 shrink-0 relative z-10 bg-size-[100%_100%] bg-[url('/images/back_card.png')]">
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    {/* Info adversaire centrale avec message */}
                    <div className="flex items-center justify-center gap-2 overflow-visible relative">
                        <label className="truncate text-sm">{etatJeu?.opponent?.username}</label>
                        <div onClick={() => attaque("ATTACK", maCarte.uid, 0)} className="w-24 h-24 shrink-0 rounded-full bg-[url(/images/warrior.jpg)] bg-cover bg-center border-4 shadow-lg cursor-pointer">
                        </div>
                        <label className="truncate text-sm">{etatJeu?.opponent?.heroClass}</label>

                        {/* Message d'erreur - À DROITE de l'avatar */}
                        {messageErreur !== null && showMessage && (
                            <div className="absolute left-full ml-2 flex flex-col items-start bg-red-900/90 px-3 py-2 rounded-lg z-30 shadow-lg border border-red-500 whitespace-nowrap">
                                <h2 className="text-xs font-bold text-red-200">Message:</h2>
                                <p className="text-xs text-white">{messageErreur}</p>
                            </div>
                        )}
                    </div>

                    {/* Stats adversaire - avec overflow géré */}
                    <div className="flex flex-col items-end justify-center gap-2 text-3xl overflow-hidden pr-2">
                        <div className="bg-[url(/images/medical_symbol.png)] w-32 h-12 bg-contain pl-8 bg-no-repeat shrink-0">
                            {etatJeu?.opponent?.hp}
                        </div>
                        <div className="bg-[url(/images/credit_symbol.png)] w-32 h-12 bg-contain pl-8 bg-no-repeat shrink-0">
                            {etatJeu?.opponent?.mp}
                        </div>
                        <div className="bg-[url(/images/back_card.png)] w-32 h-12 bg-contain pl-8 bg-no-repeat shrink-0">
                            {etatJeu?.opponent?.remainingCardsCount}
                        </div>
                    </div>
                </div>
            </div>

            {/* Board adversaire */}
            <div className="w-full h-[25%] overflow-x-auto">
                <div className="w-full h-full font-semibold rounded-md gap-6 flex items-center justify-center text-center p-2">
                    {
                        etatJeu?.opponent?.board?.map((carte) => {
                            return <Carte
                                onClick={() => attaque("ATTACK", maCarte.uid, carte.uid)}
                                key={carte.uid}
                                nom={cartejeu.find((c) => c.id === carte.id)?.name ?? ""}
                                credit={carte.cost}
                                life={carte.hp}
                                description={carte.mechanics.join(", ")}
                                attack={carte.atk}
                                className="shrink-0 w-16 h-24 sm:w-24 sm:h-44"
                            />
                        })
                    }
                </div>
            </div>

            {/* Mon board */}
            <div className="w-full h-[25%] overflow-x-auto">
                <div className="w-full h-full font-semibold rounded-md gap-6 text-gray-900 bg-transparent flex items-center justify-center text-center p-2">
                    {
                        etatJeu?.board?.map((carte) => {
                            return <Carte
                                onClick={() => choisirCardBoard(carte)}
                                key={carte.uid}
                                nom={cartejeu.find((c) => c.id === carte.id)?.name ?? ""}
                                credit={carte.cost}
                                life={carte.hp}
                                description={carte.mechanics.join(", ")}
                                attack={carte.atk}
                                className="shrink-0 w-16 h-24 sm:w-24 sm:h-44"
                            />
                        })
                    }
                </div>
            </div>

            {/* Zone joueur */}
            <div className="w-full h-[30%] border-2 gap-2 holo-container p-4 text-cyan-300 border-cyan-300/40 bg-cyan-900/10 backdrop-blur-sm relative overflow-hidden scan-lines">
                <div className="animate-holo-glitch absolute inset-0 pointer-events-none opacity-20 bg-linear-to-r from-cyan-500/20 to-blue-500/20"></div>
                <div className="w-full h-full font-semibold rounded-md flex items-center justify-between text-center">

                    {/* Mes stats */}
                    <div className="w-auto shrink-0 flex flex-col items-start justify-center gap-2 text-3xl">
                        <div className="bg-[url(/images/medical_symbol.png)] w-32 h-12 bg-contain pl-8 bg-no-repeat">
                            {etatJeu?.hp}
                        </div>
                        <div className="bg-[url(/images/credit_symbol.png)] w-32 h-12 bg-contain pl-8 bg-no-repeat">
                            {etatJeu?.mp}
                        </div>
                        <div className="bg-[url(/images/back_card.png)] w-16 h-20 bg-contain pl-16 bg-no-repeat">
                            {etatJeu?.remainingCardsCount}
                        </div>
                    </div>

                    {/* Ma main - SANS text-2xl */}
                    <div className="flex-1 flex gap-6 items-center justify-center overflow-x-auto mx-2">
                        {
                            etatJeu?.hand?.map((carte) => {
                                return <Carte
                                    onClick={() => choisir("PLAY", carte.uid)}
                                    key={carte.uid}
                                    nom={cartejeu.find((c) => c.id === carte.id)?.name ?? ""}
                                    credit={carte.cost}
                                    life={carte.hp}
                                    description={carte.mechanics.join(", ")}
                                    attack={carte.atk}
                                    className="shrink-0 w-20 h-28 sm:w-24 sm:h-44"
                                />
                            })
                        }
                    </div>

                    {/* Boutons d'action */}
                    <div className="w-auto shrink-0 flex flex-col items-center justify-center gap-2">
                        <Button className="text-xs whitespace-nowrap" onClick={() => jouerBouton("HERO_POWER")}>
                            Hero Power
                        </Button>
                        <Button className="text-xs whitespace-nowrap" onClick={() => jouerBouton("END_TURN")}>
                            End Turn
                        </Button>
                        <Button className="text-xs whitespace-nowrap" onClick={() => jouerBouton("SURRENDER")}>
                            Abandon
                        </Button>
                        <div className="text-3xl flex items-center justify-center gap-1">
                            <div className="bg-[url(/images/sand-hourglass-timer.png)] w-16 h-16 bg-contain bg-no-repeat">
                            </div>
                            <label className="text-2xl">{etatJeu?.remainingTurnTime}</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </MainLayout>
}