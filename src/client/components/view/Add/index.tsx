import * as React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Add: React.FC = () => {

    const [username, setUsername] = useState<string>('');
    const [content, setContent] = useState<string>('');
    /***************************
     * not sure about setting password to state but 
     * I'm gunna do it... because I guess I'd be sending it 
     * to server hashed but I'm not gunna mess with that rn
     * **************************/
    const [password, setPassword] = useState<string>(''); 
    const history = useHistory();

    const handlePost = async() => {
        if(username === "" || password === "" || content === "") {
            alert('Please make sure all fields are filled out to continue.');
        } else {
            const request = await fetch(`/chirps/post/`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({name: username, password: password, content: content})
            });
            if(request.status === 401) {
                alert('The username or password you entered is incorrect');
            } else {
                history.push('/');
            }
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
                        <input type="text" className="form-control" placeholder="Username" 
                        onChange={(event) => { setUsername(event.target.value) }}
                        />
                    </div>
                    <div className="input-group mt-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="">Password: </span>
                        </div>
                        <input type="password" className="form-control" placeholder="Password" value={password} 
                        onChange={(event) => { setPassword(event.target.value); }}
                        />
                    </div>
                    <div className="input-group mt-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Content: </span>
                        </div>
                        <textarea className="form-control" aria-label="With textarea" placeholder="What's up?"
                        onChange={(event) => { setContent(event.target.value); }}
                        />
                    </div>
                </div>
                <div className="card-footer">
                    <div className="row">
                        <div className="col d-flex justify-content-end">
                            <button onClick={() => { handlePost(); }} className="btn btn-secondary" id="delete-chirp">Save Chirp</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Add;