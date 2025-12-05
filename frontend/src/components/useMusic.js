import { useContext } from 'react';
import MusicContext from '../components/Musique';

export const useMusic = () => {
    const context = useContext(MusicContext);
    return context;
};