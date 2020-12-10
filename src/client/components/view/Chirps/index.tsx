import * as React from 'react';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser'; 
import { useState, useEffect } from 'react';
import * as Mentions from '../../parseMentions';

export interface IChirps {
    nextid: number,
    chirpid: string,
    username: string,
    content: string;
}

interface ChirpsProps {} 

const Chirps: React.FC<ChirpsProps> = props => {

    const [chirps, setChirps] = useState<IChirps[]>([]);

    const getChirps = async() => {
        let r = await fetch('/chirps/');
        let data = await r.json();
        setChirps(data);
    }
    
    useEffect(() => { getChirps(); }, []);

    return (
        <>
            {chirps?.map(chirp => {
                const { chirpid, username, content } = chirp;
            return (
                <article key={chirpid} className="card m-2 p-0 shadow-sm">
                    <h5 className="card-title m-1"><a href={`/user/${username}`} style={{textDecoration: 'none'}}>{username}</a></h5>
                    <p className="card-body m-0">{ReactHtmlParser (Mentions.mentions(content))}</p>
                    <div className="card-footer m-0 p-0 d-flex justify-content-end"><Link to={`/${chirpid}/admin`}>[Admin]</Link></div>
                </article>
            );
        })}
        </>
    );
}

export default Chirps;