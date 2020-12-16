import * as React from 'react';
import { useState, useEffect } from 'react';
import ChirpCard from '../ChirpCard';

export interface IChirps {
    chirpid: string,
    username: string,
    content: string;
}

const Chirps: React.FC = () => {

    const [chirps, setChirps] = useState<IChirps[]>([]);

    useEffect(() => {
        (async() => {
            try {
                let r = await fetch('/chirps/');
                let data = await r.json();
                setChirps(data);
            } catch (e) {
                console.error(e);
            }
        })();
     }, []);

    return <ChirpCard chirps={chirps} />; 

}

export default Chirps;