import { useEffect, useRef, useState } from "react";
import MainLayout from "../layouts/main-layout";
import Button from "../components/button";
import logo from '../assets/img/logo.png'
import { useNavigate } from "react-router";



export default function Loading(){

    return <div className="fixed inset-0 w-full h-full bg-black flex flex-col justify-center items-center gap-4">
            <div className="absolute z-10 holo-container rounded-3xl">
                <h1 className="text-white text-4xl ">Chargement...</h1>
            </div>
            <img
              src="/images/hyperspace.gif"
              alt="Animation"
              className="w-full h-full object-cover"
            />
          </div>
}