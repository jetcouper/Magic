import { useEffect, useRef, useState } from "react";
import MainLayout from "../layouts/main-layout";
import Carte from "../components/Carte"
import Button from "../components/button";
import logo from '../assets/img/logo.png'
import { useNavigate } from "react-router";

export default function Jeu() {


    return <MainLayout title="Jeu">
        <div className="flex flex-col mx-auto md:h-screen bg-amber-500">
                <div className="w-full h-2/12">
                    <div className="text-2xl w-full h-full font-semibold rounded-md border-black border-4 text-gray-900 bg-transparent flex items-center justify-center text-center">
                        
                    </div>
                </div>
                <div className="w-full h-7/12 ">
                    <div className="text-2xl w-full h-full font-semibold rounded-md border-black border-4 text-gray-900 bg-transparent flex items-center justify-center text-center">
                        <Carte></Carte>
                    </div>
                </div>
                <div className="w-full h-3/12 ">
                    <div className="text-2xl w-full h-full font-semibold rounded-md border-black border-4 text-gray-900 bg-transparent flex items-center justify-center text-center">
                        
                    </div>
                </div>
        </div>
    </MainLayout>

}