// props = paramètres/données qu'on injecte dans un component

import { NavLink } from "react-router";
import logo from '../assets/img/logo.png'
import '../css/global.css'

//children = ce qui est entre <MainLayout> et </MainLayout>
export default function MainLayout({title ,children}){

    return <>
                {/* <header>
                </header> */}
                {/* <nav>
                    <ul>
                        <li><NavLink to="/">Accueil</NavLink></li>
                        <li><NavLink to="/customer">Client</NavLink></li>
                        <li><NavLink to="/store">Magasin</NavLink></li>
                        <li><NavLink to="/programmes">Programmes</NavLink></li>
                    </ul>
                </nav> */}

                <main className="font-starwars">
                    {children}
                </main>
                {/* <footer>

                </footer> */}
            </>

}