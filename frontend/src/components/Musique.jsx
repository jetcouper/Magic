import { createContext, useContext, useRef, useState, useEffect } from 'react';

const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
    const [isMuted, setIsMuted] = useState(false);
    const [musiqueActuel, setmusiqueActuel] = useState(null);
    const [hasInteracted, setHasInteracted] = useState(false);
    const audioRef = useRef(null);

    const tracksParPage = useRef({
        'login': 'menu',
        'lobby': 'menu',
        'jeu': 'battle',
    });

    // Liste des musiques disponibles
    const musiques = useRef({
        'menu': '/audio/music/Main-Menu.mp3',
        'battle': '/audio/music/battle.mp3',
    });

    useEffect(() => {
        const handleFirstInteraction = () => {
            setHasInteracted(true);
            // Retire les listeners après la première interaction
            document.removeEventListener('click', handleFirstInteraction);
            document.removeEventListener('keydown', handleFirstInteraction);
        };

        document.addEventListener('click', handleFirstInteraction);
        document.addEventListener('keydown', handleFirstInteraction);

        return () => {
            document.removeEventListener('click', handleFirstInteraction);
            document.removeEventListener('keydown', handleFirstInteraction);
        };
    }, []);
    
    useEffect(() => {
        if (!hasInteracted) return;
        if (musiqueActuel && musiques.current[musiqueActuel]) {

            if (audioRef.current && audioRef.current.src.includes(musiques.current[musiqueActuel])) {
                return;
            }

            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
            }

            audioRef.current = new Audio(musiques.current[musiqueActuel]);
            audioRef.current.loop = true;
            audioRef.current.volume = isMuted ? 0 : 0.5;

            audioRef.current.play()
        }

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
            }
        };
    }, [musiqueActuel, hasInteracted,isMuted]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = isMuted ? 0 : 0.5;

            if (!isMuted && audioRef.current.paused && hasInteracted) {
                audioRef.current.play()
            }
        }
    }, [isMuted, hasInteracted]);

    const toggleMute = () => {
        if (!hasInteracted) {
            setHasInteracted(true);
        }
        setIsMuted(prev => !prev);
    };

    const changePage = (pageName) => {
        const newTrack = tracksParPage.current[pageName];
        if (newTrack && newTrack !== musiqueActuel) {
            setmusiqueActuel(newTrack);
        }
    };

    return (
        <MusicContext.Provider value={{ isMuted, toggleMute, changePage,musiqueActuel,hasInteracted }}>
            {children}
        </MusicContext.Provider>
    );
};

export default MusicContext;