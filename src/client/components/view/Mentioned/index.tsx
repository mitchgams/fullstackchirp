import * as React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import UserDNE from '../../UserDNE';
import { IChirps } from '../ChirpCard';
import ChirpCard from '../ChirpCard';

interface IUseParams {
    name: string
}

const Mentioned: React.FC = () => {
    const { name } = useParams<IUseParams>();
    const [chirps, setChirps] = useState<IChirps[]>([]);
    
    useEffect(() => { 
        (async() => {
            try {
                let r = await fetch(`/mentions/${name}`);
                let data = await r.json();
                setChirps(data);
            } catch (e) {
                console.error(e);
            }
        })();
     }, []);

    if(chirps?.length === 0) {
        return <UserDNE name={name} />;
    } else {
        return <ChirpCard chirps={chirps} />;
    }
}

export default Mentioned;