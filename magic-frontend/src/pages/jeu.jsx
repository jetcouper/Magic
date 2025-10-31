import { useEffect, useRef, useState } from "react";
import MainLayout from "../layouts/main-layout";
import Carte from "../components/Carte"
import Button from "../components/button";
import logo from '../assets/img/logo.png'
import { useNavigate } from "react-router";

export default function Jeu() {


    return <MainLayout title="Jeu">
        <div className="flex flex-col mx-auto md:h-screen bg-amber-500">
                <div className="w-full h-[15vh]">
                    <div className="text-2xl w-full h-full font-semibold rounded-md border-black border-4 text-gray-900 bg-transparent flex items-center justify-between text-center">
                        <div>
                            carte restante
                        </div>
                        <div>
                            ennemi
                        </div>
                        <div>
                            carte restante
                        </div>

                    </div>
                </div>
                <div className="w-full h-[30vh] ">
                    <div className="text-2xl w-full h-full font-semibold rounded-md border-black border-4 text-gray-900 bg-transparent flex items-center justify-center text-center">
                        <Carte nom="Anakin" description="Chevalier jedi" credit="10" attack="10" life="200"></Carte>
                    </div>
                </div>
                <div className="w-full h-[30vh] ">
                    <div className="text-2xl w-full h-full font-semibold rounded-md border-black border-4 text-gray-900 bg-transparent flex items-center justify-center text-center">
                        <Carte nom="obi-wan" description="Maitre jedi" credit="12" attack="15" life="250" ></Carte>
                    </div>
                </div>
                <div className="w-full h-[25vh] ">
                    <div className=" text-2xl w-full h-full font-semibold rounded-md border-black border-4 text-gray-900 bg-transparent flex items-center justify-between text-center">
                        <div>
                            vie<br></br>
                            credit<br></br>
                            carte restante
                        </div>
                        <div>
                            carte
                        </div>
                        <div>
                            hero power<br></br>
                            end turn<br></br>
                            timer
                        </div>
                    </div>
                </div>
        </div>
    </MainLayout>

}