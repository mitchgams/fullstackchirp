import * as React from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser'; 
import { useState, useEffect } from 'react';
import * as Mentions from '../../parseMentions';

export interface IChirps {
    userid: number,
    chirpid: string,
    name: string,
    content: string,
    date: string;
}
interface IUseParams {
    name: string
}
interface ChirpsProps {} 

const Mentioned: React.FC<ChirpsProps> = props => {
    const { name } = useParams<IUseParams>();
    const [chirps, setChirps] = useState<IChirps[]>([]);

    const getChirps = async() => {
        try {
            let r = await fetch(`/mentions/${name}`);
            let data = await r.json();
            setChirps(data);
            console.log(data);
        } catch (e) {
            console.error(e);
        }
    }
    
    useEffect(() => { getChirps(); }, []);

    return (
        <>
            {chirps?.map(chirp => {
                const { chirpid, userid, name, content } = chirp;
            return (
                <article key={chirpid} className="card m-2 p-0 shadow-sm">
                    <h5 className="card-title m-1"><a href={`/user/${name}`} style={{textDecoration: 'none'}}>{name}</a></h5>
                    <p className="card-body m-0">{ReactHtmlParser (Mentions.mentions(content))}</p>
                    <div className="card-footer m-0 p-0 d-flex justify-content-end"><Link to={`/${chirpid}/admin`}>[Admin]</Link></div>
                </article>
            );
        })}
        </>
    );
}

export default Mentioned;