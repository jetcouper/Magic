import { useEffect, useRef, useState } from "react";
import MainLayout from "../layouts/main-layout";
import Button from "../components/button";
import logo from '../assets/img/logo.png'
import { useNavigate } from "react-router";

export default function Lobby() {
    const chatRef = useRef(null);
    const [reponseServeur, setReponse] = useState("");
    const navigate = useNavigate();

    const goToLogin = () => {
        quitterSession();
    }

    const applyStyles = ()=> {
	let styles = {
		fontColor : "#333",
		backgroundColor : "rgba(87, 41, 5, 0.2)",
		fontGoogleName : "Sofia",
		fontSize : "20px",
		hideIcons : false,
		inputBackgroundColor : "red",
		inputFontColor : "blue",
		//padding: "5px",
		memberListFontColor : "#ff00dd",
		borderColor : "blue",
		memberListBackgroundColor : "white",
		hideScrollBar: true, // pour cacher le scroll bar
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

    const appliquerFonctions = () => {
        applyStyles();
        recupererKey();
    }   




    return <MainLayout>
        <div className="flex flex-col items-center justify-center mx-auto md:h-screen bg-amber-500">
            <div className="flex flex-col items-center w-[1000px] h-[700px] mb-6 text-2xl font-semibold text-gray-900 bg-green-400 gap-4 p-4">
                <div className="justify-center ">
                    <label className="text-2xl w-[500px] h-[100px] font-semibold rounded-md border-black border-4 text-gray-900 bg-white flex items-center justify-center text-center">
                        Bienvenue dans le lobby! Vous êtes connecté.
                    </label>
                </div>
                <div className="flex flex-row items-center justify-center gap-20">
                    <Button>
                        Pratique
                    </Button>
                    <Button>
                        Jouer
                    </Button>
                </div>
                <div className="flex items-center justify-center gap-20">
                    <Button onClick={() => goToLogin()}>
                        Quitter
                    </Button>
                </div>

                <div className="flex items-center justify-center gap-20 relative">
                    <iframe ref={chatRef} width={700} height={240} onLoad={appliquerFonctions}
                        src={`https://magix.apps-de-cours.com/server/chat/${reponseServeur}`} >
                    </iframe>
                </div>
            </div>
        </div>
    </MainLayout>

}