// props = paramètres/données qu'on injecte dans un component

import { NavLink } from "react-router";
import logo from '../assets/img/logo.png'

//children = ce qui est entre <MainLayout> et </MainLayout>
export default function MainLayout({title ,children}){

    return <>
                {/* <header className="flex bg-blue-400 rounded border-4 border-blue-950 justify-between items-center p-2">
                    <img src={logo} className="h-20"></img>
                    <h1>{title ?? "Inconnu!"}</h1>
                </header> */}
                {/* <nav>
                    <ul>
                        <li><NavLink to="/">Accueil</NavLink></li>
                        <li><NavLink to="/customer">Client</NavLink></li>
                        <li><NavLink to="/store">Magasin</NavLink></li>
                        <li><NavLink to="/programmes">Programmes</NavLink></li>
                    </ul>
                </nav> */}
                <main>
                    {children}
                </main>
                {/* <footer>

                </footer> */}
            </>

}