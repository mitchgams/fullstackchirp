import * as React from 'react';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser'; // React was showing raw html, found this solution
import * as Mentions from '../parseMentions';

export interface IChirps {
    chirpid: string,
    username: string,
    content: string;
}

interface IAppProps {
    chirps: IChirps[];
}

const ChirpCard: React.FC<IAppProps> = ({chirps}) => {

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

export default ChirpCard;