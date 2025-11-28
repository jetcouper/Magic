import { useEffect, useRef, useState } from "react";
import MainLayout from "../layouts/main-layout";
import Button from "../components/button";
import logo from '../assets/img/logo.png'
import { useNavigate } from "react-router";


export default function Note({ close }) {
    //const [cleServeur, setReponse] = useState("");
    const [addnotes, setAddNotes] = useState({
        sujet: "",
        description: "",
        date: "",
    });
    const [notes, setNotes] = useState([])
    const [erreur, setErreur] = useState("");
    const [noteSelectionnee, setNoteSelectionnee] = useState(null);
    useEffect(() => {
        recupererNotes()
    }, [])


    const recupererNotes = () => {
        fetch("/api/note.php")
            .then(response => response.json())
            .then(data => {
                //Réponse du serveur, afficher un message de succès/erreur
                console.log(data);
                setNotes(data);
            })
    }
    const selectionnerNote = (note) => {
        setNoteSelectionnee(note);
        setAddNotes({
                    sujet: note.sujet,
                    description: note.description,
                    date: note.date_note
                    
                });
        console.log(note.date)
    }

    const ajouterNote = () => {
        if (!addnotes.sujet.trim()) {
            setErreur("Tous les champs sont requis");
            return;
        }
        if (!addnotes.description.trim()) {
            setErreur("Tous les champs sont requis");
            return;
        }
        if (!addnotes.date) {
            setErreur("Tous les champs sont requis");
            return;
        }
        let formData = new FormData();
        formData.append("sujet", addnotes.sujet);
        formData.append("description", addnotes.description);
        formData.append("date_note", addnotes.date);

        fetch("/api/note.php", {
            method: "POST",
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setAddNotes({
                    sujet: '',
                    description: '',
                    date: ''
                });
                setErreur(""); // Réinitialiser aussi les erreurs
                recupererNotes();


            });
    }

    const ModifierNote = () => {
        if (!addnotes.sujet.trim()) {
            setErreur("Tous les champs sont requis");
            return;
        }
        if (!addnotes.description.trim()) {
            setErreur("Tous les champs sont requis");
            return;
        }
        if (!addnotes.date) {
            setErreur("Tous les champs sont requis");
            return;
        }
        let formData = new FormData();
        formData.append("sujet", addnotes.sujet);
        formData.append("description", addnotes.description);
        formData.append("date_note", addnotes.date);

        fetch("/api/note.php", {
            method: "POST",
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setAddNotes({
                    sujet: '',
                    description: '',
                    date: ''
                });
                setErreur(""); // Réinitialiser aussi les erreurs
                recupererNotes();


            });
    }
    const DeselectionnerNote = () => {
        setNoteSelectionnee(null)
        
    }
    const SupprimerNote = () => {
        if (!noteSelectionnee.id()) {
            setErreur("Aucune note sélectionné");
            return;
        }
        
        let formData = new FormData();
        formData.append("id", noteSelectionnee.id);

        fetch("/api/note.php", {
            method: "POST",
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setAddNotes({
                    sujet: '',
                    description: '',
                    date: ''
                });
                setErreur("Note supprimé"); // Réinitialiser aussi les erreurs
                recupererNotes();

            });
    }

    return <div className="z-10 fixed inset-0 flex flex-row items-center justify-center w-full holo-container bg-cyan-800/75">

        <div className="gap-2 holo-container p-4 text-cyan-300 rounded-xl border border-cyan-300/40 bg-cyan-900/10 backdrop-blur-sm relative overflow-hidden scan-lines" >
        <div className="animate-holo-glitch absolute inset-0 pointer-events-none opacity-20 bg-linear-to-r from-cyan-500/20 to-blue-500/20"></div>
            <h1 className="text-center text-4xl">Les notes de stratégie</h1>
            <div className="flex flex-row gap-2">
                <div className="gap-10 relative overflow-x-auto [&::-webkit-scrollbar]:w-4 [&::-webkit-scrollbar-track]:bg-cyan-800 [&::-webkit-scrollbar-thumb]:bg-cyan-300 bg-neutral-primary-soft shadow-xs rounded-base border-2 max-h-150 overflow-y-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-body">
                        <thead className="border-b border-default sticky top-0 bg-cyan-900/90 backdrop-blur-sm">
                            <tr>
                                <th scope="col" className="px-6 py-3 font-medium">
                                    ID
                                </th>
                                <th scope="col" className="px-6 py-3 font-medium">
                                    Sujet
                                </th>
                                <th scope="col" className="px-6 py-3 font-medium">
                                    Description
                                </th>
                                <th scope="col" className="px-6 py-3 font-medium">
                                    Date
                                </th>
                            </tr>
                        </thead>
                        {notes.map((note, index) => (
                            <tbody key={index}>
                                <tr key={index} onClick={() => selectionnerNote(note)} className="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default ${noteSelectionnee?.id === note.id ? 'bg-blue-200 font-semibold' : ''} ">
                                    <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap">{note.id}</th>
                                    <td className="px-6 py-4">{note.sujet}</td>
                                    <td className="px-6 py-4">{note.description}</td>
                                    <td className="px-6 py-4">{note.date_note}</td>
                                </tr>

                            </tbody>
                        ))}
                    </table>
                </div>
                <div className="flex flex-col gap-2">
                    {erreur && <p className="text-red-500 mb-4">{erreur}</p>}
                    {!erreur && <p className="text-red-500 mb-4">{"ID en READONLY"}</p>}
                    <input className="border-2 rounded-2xl border-red-600 " value={noteSelectionnee?.id ?? ""} type="text" placeholder="ID" readOnly={true}>

                    </input>
                    <input type="text" placeholder="Sujet"
                        className="border-2 rounded-2xl w-86"
                        value={addnotes.sujet}
                        onChange={(e) => setAddNotes({ ...addnotes, sujet: e.target.value })}
                        name="sujet"
                        required />

                    <textarea placeholder="Description"
                        className="border-2 rounded-2xl h-50 w-86"
                        value={addnotes.description}
                        onChange={(e) => setAddNotes({ ...addnotes, description: e.target.value })}
                        name="description"
                        required></textarea>

                    <input type="date"
                        className="border-2 rounded-2xl w-86"
                        value={addnotes.date}
                        onChange={(e) => setAddNotes({ ...addnotes, date: e.target.value })}
                        name="date_note"
                        required />

                    <Button onClick={ajouterNote}>Ajouter Note</Button>
                    <Button onClick={ModifierNote}>Modifier Note</Button>
                    <Button onClick={SupprimerNote}>Supprimer Note</Button>
                    <Button onClick={DeselectionnerNote}>Déselectionner</Button>
                    <Button onClick={close}>Fermer</Button>
                </div>
            </div>


        </div>
    </div>



}
