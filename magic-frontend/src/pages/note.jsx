import { useEffect, useRef, useState } from "react";
import MainLayout from "../layouts/main-layout";
import Button from "../components/button";
import logo from '../assets/img/logo.png'
import { useNavigate } from "react-router";


export default function Note() {
    //const [cleServeur, setReponse] = useState("");
    const [notes, setNotes] = useState([]);

    // const recupererKey = () => {
    //     fetch("/api/lobby.php")
    //     .then(response => response.json())
    //     .then(data => {
    //         //Réponse du serveur, afficher un message de succès/erreur
    //         console.log(data);
    //         setReponse(data);
    //     })
    // }

    const recupererNotes = () => {
        fetch("/api/note.php")
        .then(response => response.json())
        .then(data => {
            //Réponse du serveur, afficher un message de succès/erreur
            console.log(data);
            setNotes(data);
        })
    }

    const ajouterNote = () =>{
        let formData = new FormData();
        formData.append("sujet", document.querySelector("input[name='sujet']").value);
        formData.append("description", document.querySelector("textarea[name='description']").value);
        formData.append("date_note", document.querySelector("input[name='date_note']").value);

        fetch("/api/note.php", {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            recupererNotes();
        });
    }




    return <MainLayout title="Info" onLoad={recupererNotes}>
        <div>
            <h1>Les notes de stratégie</h1>
            <div>
                <input type="text" placeholder="Sujet" name="sujet" />
                <textarea placeholder="Description" name="description"></textarea>
                <input type="date" name="date_note" />
                <Button onClick={ajouterNote}>Ajouter Note</Button>
                <Button onClick={close}>Fermer</Button>
            </div>

            <ul>
                {notes.map((note, index) => (
                    <li key={index}>
                        <h2>{note.sujet}</h2>
                        <p>{note.description}</p>
                        <small>{note.date_note}</small>
                    </li>
                ))}
            </ul>
            
        </div>
    </MainLayout>



}
