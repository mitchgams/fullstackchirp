import * as React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { IChirps } from '../Chirps';
import UserDNE from '../../UserDNE';
import ChirpCard from '../ChirpCard';

interface IUseParams {
    name: string
}

const User: React.FC = () => {

    const { name } = useParams<IUseParams>();
    const [ chirps, setChirps ] = useState<IChirps[]>([]); 

    useEffect(() => { 
        (async() => {
            try {
                let r = await fetch('/chirps/user/' + name);
                let data = await r.json();
                setChirps(data);
            } catch(e) {
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

export default User;