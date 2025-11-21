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
        e.preventDefault(); //N'envoie pas le formulaire 
        
        let formData = new FormData();
        formData.append("username", addLogin.username); // $_POST["username"]
        formData.append("password", addLogin.password); // $_POST["password"]

        fetch("/api/login.php",{ 
            method:"POST",
            body:formData
        })
        .then(response => response.json())
        .then(data => {
            //Réponse du serveur, afficher un message de succès/erreur
            console.log(data);
            setReponse(data);
        })
    }
        useEffect(() => {
        if (reponseServeur.key) {
            goToLobby();
        }
    }, [reponseServeur]);


    return  <MainLayout title="Login">
              <section className="dark:bg-gray-900 "> 
                <div className="flex flex-col items-center justify-center mx-auto md:h-screen ">
                    <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img className="w-40 h-30" src={logo} alt="logo"></img>
                    </div>
                    <div className="w-full bg-gray-500 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                entrer votre nom d'usager
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="" onSubmit={e => appelerServeurLogin(e)}>
                                <div>
                                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">votre username</label>
                                    <input value={addLogin.username} onChange={(e) => setAddLogin({...addLogin,username : e.target.value})} type="username" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ex:darkshadow" required=""></input>
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">mot de passe</label>
                                    <input value={addLogin.password} onChange={(e) => setAddLogin({...addLogin,password : e.target.value})} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""></input>
                                </div>
                                    <Button type="submit" className="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login</Button>
                                <div>
                                    {
                                        reponseServeur === "INVALID_USERNAME_PASSWORD" ?
                                        <p className="text-red-500">nom d'utilisateur ou mot de passe invalide</p>
                                        : null
                                    }
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
              </section>
            </MainLayout>

}   