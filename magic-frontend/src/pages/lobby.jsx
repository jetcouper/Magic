import { useEffect, useRef, useState } from "react";
import MainLayout from "../layouts/main-layout";
import Button from "../components/button";
import logo from '../assets/img/logo.png'
import { useNavigate } from "react-router";
import spaceVideo from '../../public/video/star-wars-space.1920x1080.mp4';

export default function Lobby() {
    const chatRef = useRef(null);
    const [reponseServeur, setReponse] = useState("");
    const [reponseServeurType, setType] = useState("");
    const navigate = useNavigate();

    const goToLogin = () => {
        quitterSession();
    }

    const applyStyles = ()=> {
	let styles = {
		fontGoogleName : "Sofia",
        fontSize : "18px",
        backgroundColor: "rgba(0, 20, 40, 0.4)",   // style holo
        fontColor: "#00ffff",                      // cyan
        borderColor: "#00bcd4",
        inputBackgroundColor: "rgba(0, 20, 40, 0.3)",
        inputFontColor: "#00eaff",
        memberListBackgroundColor: "rgba(0, 20, 40, 0.2)",
        memberListFontColor: "#00ffff",
        hideScrollBar: true,
        noScrolling : true
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
        <div className="flex h-screen mx-auto md:h-screen relative ">
            <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover -z-10">
                                <source src={spaceVideo} type="video/mp4"/>
            </video>
            <div className="w-1/4 h-full holo-container flex-col text-cyan-300 border border-cyan-300/40 bg-cyan-900/20 backdrop-blur-sm relative overflow-hidden scan-lines">
                <div className="animate-holo-glitch absolute inset-0 pointer-events-none opacity-20 bg-linear-to-r from-cyan-500/20 to-blue-500/20"></div>
                <div className="flex flex-col items-center justify-center gap-y-40 mt-20">
                    <Button className="size-full border-6" onClick={() => jouer("TRAINING")}>
                        pratique
                    </Button>
                    <Button className="size-full border-6" onClick={() => jouer("PVP")}>
                        jouer
                    </Button>
                    <Button className="size-full border-6" onClick={() => goToLogin()}>
                        quitter
                    </Button>
                    <div className=" absolute top-185 justify-items-center justify-center border-8 border-cyan-900">
                        <h1 className="text-6xl text-cyan-900">Menu principal</h1>
                    </div>
                    
                </div>
            </div>
            <div className="w-3/4 h-2/12 holo-container flex-col text-cyan-300 border border-cyan-300/40 bg-cyan-900/20 backdrop-blur-sm relative overflow-hidden scan-lines">
                
            </div>
            
            <div className="absolute bottom-0 left-3/12 w-3/4 h-1/4 holo-container border border-cyan-300/40 bg-cyan-900/10 backdrop-blur-sm overflow-hidden scan-lines">
            <iframe
                ref={chatRef}
                onLoad={appliquerFonctions}
                className="
                    w-full h-full
                    border border-cyan-300/30
                    rounded-lg
                    bg-cyan-900/20
                    backdrop-blur-sm
                    overflow-hidden
                "
                scrolling="no"
                src={`https://magix.apps-de-cours.com/server/chat/${reponseServeur}`}
            ></iframe>
            </div>
        </div>
    </MainLayout>

}