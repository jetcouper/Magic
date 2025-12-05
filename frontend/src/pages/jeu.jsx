import { useEffect, useRef, useState } from "react";
import MainLayout from "../layouts/main-layout";
import Carte from "../components/Carte";
import Button from "../components/button";
import logo from '../assets/img/logo.png'
import { useNavigate } from "react-router";
import cartes from "../javascript/cartes";
import Victoire from "./victoire";
import Defaite from "./defaite";
import Loading from "./loading"
import clickError from "../audio/BAD_SOUND.WAV";
import defaiteMusic from "../audio/outcome/Rebel-Lose-1.mp3";
import victoireMusic from "../audio/outcome/Rebel-Victory.mp3";
import { useMusic } from "../components/useMusic";


export default function Jeu() {
    const [etatJeu, setEtatJeu] = useState({});
    const [messageErreur, setMessageErreur] = useState("")
    const chatRef = useRef(null);
    const [cleServeur, setReponse] = useState("");
    const [maCarte, setMaCarte] = useState({})
    const [carteAdverse, setCarteAdverse] = useState({})
    const [showMessage, setShowMessage] = useState(false);
    const [showChat, setShowChat] = useState(false);
    const [gameOutcome, setGameOutcome] = useState(null); // "LAST_GAME_WON" | "LAST_GAME_LOST" | null
    const [showOutcomeModal, setShowOutcomeModal] = useState(false);
    const [isLoading, setIsLoading] = useState(true)
    const stateTimeout = useRef(null)
    const cartejeu = cartes
    const [imageEnnemy, setImageEnnemy] = useState("")
    const estFini = useRef(false);

    //Le timer
    const [secondes, setSecondes] = useState(50); // Durée initiale
    const [estActif, setEstActif] = useState(false);
    const intervalRef = useRef(null);
    const defaiteMusique = useRef(new Audio(defaiteMusic));
    const victoireMusique = useRef(new Audio(victoireMusic));

    const erreur = useRef(new Audio(clickError))

    const musiqueEnCours = useRef(null);

    const { changePage, toggleMute, isMuted } = useMusic();

    useEffect(() => {
        changePage('jeu');
    }, []);

    const audioError = () => {
        erreur.current.currentTime = 0;
        erreur.current.play();
    };
    useEffect(() => {
        return () => {
            // Arrête la musique en cours quand le composant se démonte
            if (musiqueEnCours.current) {
                musiqueEnCours.current.pause();
                musiqueEnCours.current.currentTime = 0;
            }
        };
    }, []);

    useEffect(() => {
        if (estActif && secondes > 0) {
            intervalRef.current = setInterval(() => {
                setSecondes(prev => prev - 1);
            }, 1000);
        } else if (secondes === 0) {
            setEstActif(false);
        }

        // Nettoyage
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [estActif, secondes]);

    const tourPrecedent = useRef(null);
    //Lorsque le tour change, on reset le timer
    useEffect(() => {
        const estMonTour = etatJeu?.yourTurn;

        if (tourPrecedent.current !== null && tourPrecedent.current !== estMonTour) {
            setSecondes(50);
            setEstActif(true);
        }

        tourPrecedent.current = estMonTour;
    }, [etatJeu?.yourTurn]);


    const applyStyles = () => {
        let styles = {

            fontGoogleName: "Science Gothic",
            fontSize: "18px",
            backgroundColor: "rgba(0, 20, 40, 0.4)",   // style holo
            fontColor: "#00ffff",                      // cyan
            borderColor: "#00bcd4",
            inputBackgroundColor: "rgba(0, 20, 40, 0.3)",
            inputFontColor: "#00eaff",
            inputPadding: "15px",
            memberListBackgroundColor: "rgba(0, 20, 40, 0.2)",
            memberListFontColor: "#00ffff",
            hideScrollBar: true,
            noScrolling: true,
        }
        setTimeout(() => {
            chatRef.current.contentWindow.postMessage(JSON.stringify(styles), "*");
            console.log(cleServeur);
        }, 100);
    }



    useEffect(() => {
        if (messageErreur != "") {
            setShowMessage(true);
            const timer = setTimeout(() => {
                setShowMessage(false)
                setMessageErreur("")

            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [messageErreur]);

    const fetchState = () => {
        fetch("/api/game-state.php")
            .then(response => response.json())
            .then(response => {
                console.log(response)

                const res = response.result;

                // Si le serveur renvoie un simple statut de résultat de la dernière partie
                if (res === "WAITING") {
                    setGameOutcome("WAITING");
                }
                else if (res === "LAST_GAME_WON") {
                    //console.log("Vous avez gagné la dernière partie !")
                    setGameOutcome("LAST_GAME_WON");
                    setShowOutcomeModal(true);
                    if(!estFini.current){
                        if(isMuted === false){
                            toggleMute();
                        }
                        musiqueEnCours.current = victoireMusique.current;
                        musiqueEnCours.currentTime = 0;
                        musiqueEnCours.current.play();
                        estFini.current = true;
                    }
                    

                }
                else if (res === "LAST_GAME_LOST") {
                    //console.log("Vous avez perdu la dernière partie !")
                    setGameOutcome("LAST_GAME_LOST");
                    setShowOutcomeModal(true);
                    if(!estFini.current){
                        if(isMuted === false){
                            toggleMute();
                        }
                        musiqueEnCours.current = defaiteMusique.current;
                        musiqueEnCours.current.currentTime = 0;
                        musiqueEnCours.current.play();

                        estFini.current = true;
                    }
                    
                }
                // Si c'est un objet d'état de jeu complet, on l'applique
                else if (typeof res === 'object' && res !== null) {
                    setIsLoading(false)
                    setEtatJeu(res)
                    if (imageEnnemy === "") {
                        const enemyClass = res.opponent.heroClass.toLowerCase();
                        setImageEnnemy(`/images/${enemyClass}.png`);
                    }

                }

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

    // Récupérer la clé serveur au montage (MainLayout n'appelle pas onLoad)
    useEffect(() => {
        recupererKey();
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
    const chat = () => {
        setShowChat(true);
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
                        audioError();
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
                    audioError();
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
                    audioError();
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
    if (isLoading) {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black">
                <Loading />
            </div>
        );
    }

    return <MainLayout title="Jeu" onLoad={recupererKey}>
        <div className="flex flex-col mx-auto h-screen overflow-hidden">
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
                    <div className="flex items-center justify-center gap-2 relative">
                        <label className="truncate text-sm">{etatJeu?.opponent?.username}</label>
                        <div onClick={() => attaque("ATTACK", maCarte.uid, 0)} style={{ backgroundImage: `url(${imageEnnemy})` }} className="w-24 h-24 shrink-0 rounded-full bg-no-repeat bg-cover bg-center border-4 shadow-lg cursor-pointer">
                        </div>
                        <label className="truncate text-sm">{etatJeu?.opponent?.heroClass}</label>

                        {/* Message d'erreur - À DROITE de l'avatar */}
                        {messageErreur !== "" && showMessage && (
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
            <div className="w-full h-[25%] overflow-visible py-8">
                <div className="w-full h-full font-semibold rounded-md gap-6 flex items-center justify-center text-center p-2">
                    {
                        etatJeu?.opponent?.board?.map((carte) => {
                            return <Carte
                                mechanics={carte.mechanics}
                                onClick={() => attaque("ATTACK", maCarte.uid, carte.uid)}
                                key={carte.uid}
                                nom={cartejeu.find((c) => c.id === carte.id)?.name ?? ""}
                                credit={carte.cost}
                                life={carte.hp}
                                description={carte.mechanics.join(", ")}
                                attack={carte.atk}
                                state={carte.state}
                                imageURL={cartejeu.find((c) => c.id === carte.id)?.image ?? ""}
                                className=" holo-container shrink-0 w-16 h-24 sm:w-24 sm:h-44 hover:scale-[1.5] transition duration-300 hover:z-50 "
                            />
                        })
                    }
                </div>
            </div>

            {/* Mon board */}
            <div className="w-full h-[25%] overflow-visible py-8">
                <div className="w-full h-full font-semibold rounded-md gap-6 text-gray-900 bg-transparent flex items-center justify-center text-center p-2">
                    {
                        etatJeu?.board?.map((carte) => {
                            return <Carte
                                mechanics={carte.mechanics}
                                onClick={() => choisirCardBoard(carte)}
                                key={carte.uid}
                                nom={cartejeu.find((c) => c.id === carte.id)?.name ?? ""}
                                credit={carte.cost}
                                life={carte.hp}
                                description={carte.mechanics.join(", ")}
                                attack={carte.atk}
                                state={carte.state}
                                imageURL={cartejeu.find((c) => c.id === carte.id)?.image ?? ""}
                                className=" holo-container shrink-0 w-16 h-24 sm:w-24 sm:h-44 hover:scale-[1.5] transition duration-300 hover:z-50 "
                            />
                        })
                    }
                </div>
            </div>

            {/* Zone joueur */}
            <div className="w-full h-[30%] border-2 gap-2 holo-container p-4 text-cyan-300 border-cyan-300/40 bg-cyan-900/10 backdrop-blur-sm relative scan-lines">
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
                    <div className="flex-1 flex gap-6 items-center justify-center overflow-visible mx-2 py-8 ">
                        {
                            etatJeu?.hand?.map((carte) => {
                                return <Carte
                                    mechanics={carte.mechanics}
                                    onClick={() => choisir("PLAY", carte.uid)}
                                    key={carte.uid}
                                    nom={cartejeu.find((c) => c.id === carte.id)?.name ?? ""}
                                    credit={carte.cost}
                                    life={carte.hp}
                                    description={carte.mechanics.join(", ")}
                                    attack={carte.atk}
                                    state={carte.state}
                                    imageURL={cartejeu.find((c) => c.id === carte.id)?.image ?? ""}
                                    className="holo-container shrink-0 w-20 h-28 sm:w-24 sm:h-44 hover:scale-[1.5] hover:z-50 transition duration-300"
                                />
                            })
                        }
                    </div>

                    {/* Boutons d'action */}
                    <div className="w-auto shrink-0 flex flex-col items-center justify-center gap-2">
                        <Button className="text-xs whitespace-nowrap w-40" onClick={() => jouerBouton("HERO_POWER")}>
                            Hero Power
                        </Button>
                        <Button className="text-xs whitespace-nowrap w-40" onClick={() => jouerBouton("END_TURN")}>
                            End Turn
                        </Button>
                        <Button className="text-xs whitespace-nowrap w-40" onClick={() => jouerBouton("SURRENDER")}>
                            Abandon
                        </Button>
                        <Button className="text-xs whitespace-nowrap w-40" onClick={() => chat()}>
                            Chat
                        </Button>
                        <Button className="text-xs whitespace-nowrap w-60" onClick={() => toggleMute()}>{isMuted ? "Activer la musique" : "Désactiver la musique"}</Button>
                        <div className="text-3xl flex items-center justify-center gap-1">
                            <div className="bg-[url(/images/sand-hourglass-timer.png)] w-16 h-16 bg-contain bg-no-repeat">
                            </div>
                            <label className="text-2xl">{secondes}</label>
                        </div>
                    </div>
                </div>
            </div>
            {/* Outcome modal (victoire / défaite) */}
            {showOutcomeModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
                    <div className="pt-6">
                        {gameOutcome === "LAST_GAME_WON" && <Victoire />}
                        {gameOutcome === "LAST_GAME_LOST" && <Defaite />}
                    </div>
                </div>
            )}
            {
                isLoading === true && (<div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full">
                    {<Loading />}
                </div>)
            }


            {/* Iframe chat */}
            {showChat && (
                <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="relative bg-white/5 rounded-xl shadow-2xl w-full max-w-x1 mx-4 p-3 sm:p-4 holo-container">
                        <div className="animate-holo-glitch absolute inset-0 pointer-events-none opacity-20 bg-linear-to-r from-cyan-500/20 to-blue-500/20"></div>
                        <div className="absolute top-2 right-2">
                            <Button className="text-xs" onClick={() => setShowChat(false)}>Fermer</Button>
                        </div>
                        <div className="w-full h-60 bg-transparent rounded-md overflow-hidden border border-cyan-300/20">
                            <iframe
                                ref={chatRef}
                                onLoad={applyStyles}
                                noScrolling={true}
                                scrolling="no"
                                hideScrollBar={true}
                                className="w-full h-full bg-transparent"
                                src={`https://magix.apps-de-cours.com/server/chat/${cleServeur.key}`}
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </MainLayout>
}