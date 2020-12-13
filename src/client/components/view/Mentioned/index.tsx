import * as React from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser'; 
import { useState, useEffect } from 'react';
import UserDNE from '../../UserDNE';
import * as Mentions from '../../parseMentions';

export interface IMentionedChirps {
    userid: number,
    chirpid: string,
    name: string,
    content: string,
    date: string;
}
interface IUseParams {
    name: string
}

const Mentioned: React.FC = () => {
    const { name } = useParams<IUseParams>();
    const [chirps, setChirps] = useState<IMentionedChirps[]>([]);
    
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
}

export default Mentioned;