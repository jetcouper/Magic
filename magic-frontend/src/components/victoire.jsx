import { useRef } from "react";
import { useNavigate } from "react-router";
import Button from "../components/button";

export default function victoire(){
    const navigate = useNavigate();

    
    const verslobby = () => {
        navigate("/lobby");
    }

    return <div className="">
        <h1>
            victoire
        </h1>
        <Button  onClick={() => verslobby()}>
            quitter
        </Button>

    </div>
}