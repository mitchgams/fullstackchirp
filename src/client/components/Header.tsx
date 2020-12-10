import * as React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = props => {

    return (
        <nav className="card m-0 p-2 bg-info shadow-sm">
            <div className="row">
                <div className="col-md-8 d-flex justify-content-start">
                    <h3 style={{display: "inline"}}>Chirper</h3>
                </div>
                <div className="col-md-4 d-flex justify-content-end">
                    <Link className="btn btn-secondary mr-1" to="/">Chirps</Link>
                    <Link className="btn btn-secondary" to="/chirp/add/">Add Chirp</Link>
                </div>
            </div>
        </nav>
    );
}

export default Header;