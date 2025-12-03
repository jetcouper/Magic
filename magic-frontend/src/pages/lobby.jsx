import { useEffect, useRef, useState } from "react";
import MainLayout from "../layouts/main-layout";
import Button from "../components/button";
import logo from '../assets/img/logo.png'
import { useNavigate } from "react-router";
import Note from "./note.jsx";
import Deck from "./deck.jsx";

export default function Lobby() {
    const chatRef = useRef(null);
    const [reponseServeur, setReponse] = useState("");
    const [showNotes, setShowNotes] = useState(false);
    const [showDeck, setShowDeck] = useState(false);
    const navigate = useNavigate();

    

    const goToLogin = () => {
        quitterSession();
    }

    const applyStyles = ()=> {
    

    let styles = {
        fontGoogleName : "Share Tech",
        fontSize : "18px",
        backgroundColor: "rgba(0, 20, 40, 0.4)",   // style holo
        fontColor: "#00ffff",                      // cyan
        borderColor: "#00bcd4",
        inputBackgroundColor: "rgba(0, 20, 40, 0.3)",
        inputFontColor: "#00eaff",
        inputPadding: "15px",
        memberListBackgroundColor: "rgba(0, 20, 40, 0.2)",
        memberListFontColor: "#00ffff",
        hideScrollBar: true,
        noScrolling : true,
    }
	
	setTimeout(() => {
		chatRef.current.contentWindow.postMessage(JSON.stringify(styles), "*");	
    }, 100);
}


    const recupererKey = () => {
        fetch("/api/lobby.php")
        .then(response => response.json())
        .then(data => {
            //Réponse du serveur, afficher un message de succès/erreur
            console.log(data);
            setReponse(data);
        })
    }
    const quitterSession = () =>{
        let formData = new FormData();
        formData.append("key", reponseServeur); // $_POST["key"]

        fetch("/api/lobby.php",{ 
            method:"POST",
            body:formData
        })
        .then(response => response.json())
        .then(data => {
            //Réponse du serveur, afficher un message de succès/erreur
            console.log(data);
            setReponse("");
            navigate("/");
        })
    }
    const ouvrirDeck = () =>{
        setShowDeck(true)
    }
    const fermerDeck = () =>{
        setShowDeck(false)
    }

    const ouvrirNotes = () =>{
        setShowNotes(true);
    }


    const fermerNotes = () =>{
        setShowNotes(false);
    }
    const jouer = ($type) =>{
        let formData = new FormData();
        formData.append("key", reponseServeur); // $_POST["key"]
        formData.append("type", $type); // $_POST["key"]

        fetch("/api/lobby.php",{ 
            method:"POST",
            body:formData
        })
        .then(response => response.json())
        .then(data => {
            //Réponse du serveur, afficher un message de succès/erreur
            console.log(data);
            setReponse("");
            versJeu();
        })
    }


    const appliquerFonctions = () => {
        applyStyles();
        recupererKey();
    }   

    const versJeu = () => {
        navigate("/jeu");
    }
    



    return <MainLayout title="Lobby">
        <div className="relative h-screen w-full">
            <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover -z-10">
                <source src={"/video/star-wars-space.1920x1080.mp4"} type="video/mp4"/>
            </video>
            {showNotes && <Note close={() => {fermerNotes()}} />}
            {showDeck && <Deck recupererCle={reponseServeur} close={() => {fermerDeck()}} />}
            <div className="flex flex-row h-full w-full">
                <div className="w-full md:w-1/4 h-full holo-container flex flex-col text-cyan-300 border border-cyan-300/40 bg-cyan-900/20 backdrop-blur-sm relative overflow-hidden scan-lines">
                    <div className="animate-holo-glitch absolute inset-0 pointer-events-none opacity-20 bg-linear-to-r from-cyan-500/20 to-blue-500/20"></div>
                    <div className="flex flex-col items-stretch justify-between py-8 px-4 h-full">
                        <img className="mx-auto mb-4" />
                        <div className="flex flex-col gap-4">
                            <Button className="w-full h-20 border-6" onClick={() => jouer("TRAINING")}>pratique (Joueur contre l'IA)</Button>
                            <Button className="w-full h-20 border-6" onClick={() => jouer("PVP")}>jouer (Joueur contre joueur)</Button>
                            <Button className="w-full h-20 border-6" onClick={() => goToLogin()}>quitter (Retour au loggin)</Button>
                            <Button className="w-full h-20 border-6" onClick={() => ouvrirNotes()}>Les Notes</Button>
                            <Button className="w-full h-20 border-6" onClick={() => ouvrirDeck()}>Deck</Button>
                        </div>
                        <div className="border-8 border-cyan-800 p-2 mt-4 ">
                            <h1 className="text-2xl md:text-5xl text-cyan-200 text-center">Menu principal</h1>
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex flex-col items-center p-10">
                    <div className="w-full max-w-5xl h-4/12">
                        <img className="w-full h-full object-contain" src="/images/Star_Wars_Logo.svg.png" />
                    </div>
                    <div className="mt-6">
                        <p className="text-cyan-300 text-xl">Bienvenue dans le lobby !</p>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-1/4 w-3/4 h-1/2 md:h-1/3 lg:h-[22%] holo-container border border-cyan-300/40 bg-cyan-900/10 backdrop-blur-sm overflow-auto scan-lines">
                <iframe
                    ref={chatRef}
                    onLoad={appliquerFonctions}
                    noScrolling={true}
                    scrolling="no"
                    hideScrollBar={true}
                    className="w-full h-full border border-cyan-300/30 bg-cyan-900/20 backdrop-blur-sm overflow-auto"
                    src={`https://magix.apps-de-cours.com/server/chat/${reponseServeur}`}
                ></iframe>
            </div>
        </div>
    </MainLayout>

}