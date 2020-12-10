import * as React from 'react';
import Chirps from './view/Chirps';

interface IHomeProps { }

const Home: React.FC<IHomeProps> = props => {

    /***********
     * I know this page is pointless but I wasn't sure if 
     * I was going to use it for something or not.
     */

    return (
        <Chirps />
    );
}

export default Home;