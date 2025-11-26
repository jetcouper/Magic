import { useEffect, useRef, useState } from "react";
import MainLayout from "../layouts/main-layout";
import Button from "../components/button";
import logo from '../assets/img/logo.png'
import { useNavigate } from "react-router";

export default function Login() {
    const navigate = useNavigate();

    const goToLobby = () => {
        navigate("/lobby")
    }

    const [addLogin, setAddLogin] = useState({
        username:"",
        password:"",
    })
    const [reponseServeur, setReponse] = useState([]);

    const appelerServeurLogin = e =>{
        e.preventDefault();
        
        let formData = new FormData();
        formData.append("username", addLogin.username);
        formData.append("password", addLogin.password);

        fetch("/api/login.php",{ 
            method:"POST",
            body:formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setReponse(data);
        })
    }
    
    useEffect(() => {
        if (reponseServeur.key) {
            goToLobby();
        }
    }, [reponseServeur]);

    return (
        <MainLayout title="Login">
            <section className="relative min-h-screen overflow-hidden"> 
                <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover -z-10">
                    <source src={"/video/star-destroyer-2.3840x2160.mp4"} type="video/mp4"/>
                </video>
                {/* <div className="absolute inset-0 bg-black/60 -z-5"></div> */}
                <div className="relative z-10 flex flex-col items-center justify-center mx-auto min-h-screen py-8 px-4">
                    {/* Logo */}
                    <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img className="w-40 h-30" src={logo} alt="logo" />
                    </div>
                    
                    {/* Container holographique - UTILISEZ LA CLASSE holo-container */}
                    <div className="holo-container w-full max-w-md p-4 text-cyan-300 rounded-xl border border-cyan-300/40 bg-cyan-900/10 backdrop-blur-sm relative overflow-hidden scan-lines">
                        
                        {/* Effet de glitch en overlay */}
                        <div className="animate-holo-glitch absolute inset-0 pointer-events-none opacity-20 bg-linear-to-r from-cyan-500/20 to-blue-500/20"></div>
                        
                        {/* Contenu */}
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8 relative z-10">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-cyan-300 md:text-2xl text-center">
                                IDENTIFICATION REQUISE
                            </h1>
                            
                            <form className="space-y-4 md:space-y-6" onSubmit={e => appelerServeurLogin(e)}>
                                {/* Username */}
                                <div>
                                    <label 
                                        htmlFor="username" 
                                        className="block mb-2 text-sm font-medium text-cyan-300 tracking-wide"
                                    >
                                        CODE D'IDENTIFICATION
                                    </label>
                                    <input 
                                        value={addLogin.username} 
                                        onChange={(e) => setAddLogin({...addLogin, username: e.target.value})} 
                                        type="text" 
                                        name="username" 
                                        id="username" 
                                        className="bg-gray-900/50 border border-cyan-500/50 text-cyan-100 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 placeholder-cyan-700 backdrop-blur-sm outline-none transition-all duration-300" 
                                        placeholder="ex: darkshadow" 
                                        required 
                                    />
                                </div>
                                
                                {/* Password */}
                                <div>
                                    <label 
                                        htmlFor="password" 
                                        className="block mb-2 text-sm font-medium text-cyan-300 tracking-wide"
                                    >
                                        CLEF DE SÉCURITÉ
                                    </label>
                                    <input 
                                        value={addLogin.password} 
                                        onChange={(e) => setAddLogin({...addLogin, password: e.target.value})} 
                                        type="password" 
                                        name="password" 
                                        id="password" 
                                        placeholder="••••••••" 
                                        className="bg-gray-900/50 border border-cyan-500/50 text-cyan-100 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 placeholder-cyan-700 backdrop-blur-sm outline-none transition-all duration-300" 
                                        required 
                                    />
                                </div>
                                
                                {/* Bouton */}
                                <Button 
                                    type="submit" 
                                    className="w-full "
                                >
                                    ACCÈS AUTORISÉ
                                </Button>
                                
                                {/* Message d'erreur */}
                                <div>
                                    {reponseServeur === "INVALID_USERNAME_PASSWORD" && (
                                        <div className="p-3 bg-red-900/20 border border-red-500/40 rounded-lg">
                                            <p className="text-red-400 text-center text-sm animate-pulse">
                                                ACCÈS REFUSÉ - IDENTIFIANTS INVALIDES
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </form>
                            
                            {/* Footer */}
                            <div className="text-center pt-4 border-t border-cyan-500/20">
                                <p className="text-cyan-600 text-xs tracking-widest">
                                    SYSTÈME SÉCURISÉ
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Indicateurs système */}
                    <div className="mt-6 flex justify-center space-x-8 text-cyan-500 text-xs">
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                            <span className="tracking-wide">SYSTÈME ACTIF</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="tracking-wide">CONNEXION SÉCURISÉE</span>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}