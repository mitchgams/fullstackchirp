import * as React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser'; 
import * as Mentions from '../../parseMentions';

interface IUseParams {
    name: string
}

export interface IChirps {
    nextid: number,
    chirpid: string,
    username: string,
    content: string;
}

const User: React.FC = () => {

    const { name } = useParams<IUseParams>();
    const [ chirps, setChirps ] = useState<IChirps[]>([]); 

    const getChirps = async() => {
        // an error is gunna pop if the user doesn't exist. I tried to mitigate but i just can't anymore.
            let r = await fetch('/chirps/user/' + name);
            let data = await r.json();
            console.log(data);
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

export default User;