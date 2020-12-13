import * as React from 'react';

interface IuserDNEProps {
    name: string
}

const UserDNE: React.FC<IuserDNEProps> = props => {

    const { name } = props;

        return (
        <article className="card m-2 p-0 shadow-sm"><h5 className="card-body">User @{name} does not exist.</h5></article>
        );
}

export default UserDNE;