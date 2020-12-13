import * as React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';

interface IUseParams {
    id: string;
}

const Edit: React.FC = () => {

    const { id } = useParams<IUseParams>();
    const [password, setPassword] = useState<string>('')
    const [username, setUser] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const history = useHistory();

    useEffect(() => {
        (async() => {
            try {
                let r = await fetch(`/chirps/${id}`);
                let data = await r.json();
                setUser(data[0].username);
                setContent(data[0].content);
            } catch(e) {
                console.error(e);
            }
        })();
    }, []);

    const handleDelete = async() => {
        try {
            const request = await fetch(`/chirps/delete/${id}`, {
                method: 'DELETE',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({password: password})
            })
            if(request.status === 401) { // wrong password
                alert('The password you have entered is incorrect');
            } else { // success go back
                setPassword('');
                history.goBack();
            }
        } catch(e) {
            console.error(e);
        }
    }

    const handleEdit = async() => {
        try {
            const request = await fetch(`/chirps/edit/${id}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({chirpid: id, username: username, password: password, content: content})
            });
            if(request.status === 401) {
                alert('The password you have entered is incorrect');
            } else { // success go back
                setPassword('');
                history.goBack();
            }
        } catch(e) {
            console.log(e);
        }
    }
    return (
            <>
                <section className="card m-2 shadow-sm">
                    <h5 className="card-title m-1">Edit Chirp</h5>
                    <div className="card-body m-0">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="">Username: </span>
                            </div>
                            <input type="text" className="form-control" value={username} 
                            readOnly/>
                        </div>
                        <div className="input-group mt-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="">Password: </span>
                            </div>
                            <input type="password" className="form-control" id="ok" value={password} 
                            onChange={(event) => { setPassword(event.target.value); }}
                            />
                        </div>
                        <div className="input-group mt-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Content: </span>
                            </div>
                            <textarea className="form-control" aria-label="With textarea" value={content}
                            onChange={(event) => { setContent(event.target.value); }}
                            />
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="row">
                            <div className="col d-flex justify-content-center">
                                <button onClick={() => { handleDelete(); }} className="btn btn-secondary" id="delete-chirp">Delete</button>
                            </div>
                            <div className="col d-flex justify-content-center">
                                <button onClick={() => { handleEdit(); }} className="btn btn-secondary" id="save-chirp">Save</button>
                            </div>
                        </div>
                    </div>
                </section>
            </>
    );
}

export default Edit; 