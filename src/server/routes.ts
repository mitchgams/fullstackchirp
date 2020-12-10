import * as express from 'express';
import db from './db';

const router = express.Router();

router.get('/chirps/:id?', async(req, res) => {
    const id = req.params.id;
    if(id) {
        res.json(await db.Chirps.chirpOfId(Number(id)));
    } else {
        res.json(await db.Chirps.allChirps());
    }
});

router.get('/users/:name?', async(req, res) => {
    const name = req.params.name;
    if(name) {
        res.json(await db.Chirps.getUserIdFromName(name));
    } else {
        res.json(await db.Chirps.getUsers());
    }
});

router.get('/chirps/user/:name?', async(req, res) => {
    const name = req.params.name;
    const request = await db.Chirps.getChirpsFromName(name);
    res.json(request);
})

router.delete('/chirps/delete/:id?', async(req, res) => {
    let id = req.params.id;
     try {
        const request = await db.Chirps.deleteChirpOfId(Number(id), req.body.password);
        if(Number.isInteger(request)) throw request; // invalid password status 401
        res.sendStatus(200);
    } catch(e) {
        console.error(e);
        res.sendStatus(e); // same issue as in put. leaving for now until a better solution is found.
    }
});

router.put('/chirps/edit/:id?', async(req, res) => {
    const { chirpid, content, username, password } = req.body;
    try {
        const request = await db.Chirps.updateChirp(Number(chirpid), content, username, password);
        if(Number.isInteger(request)) throw request; // invalid password status 401
        res.sendStatus(200);
    } catch(e) {
        console.error(e);
        res.sendStatus(e); //this works, but if a different error gets thrown somehow then this will crash my code... 
    }
});

router.post('/chirps/post/', async(req, res) => {
    const { name, password, content } = req.body;
    try {
        const request = await db.Chirps.postChirp(name, password, content);
        if(Number.isInteger(request)) throw request; //invalid username or password
        res.sendStatus(200);
    } catch(e) {
        console.error(e);
        res.sendStatus(e); // same issue as in put. leaving for now until a better solution is found.
    }
});


export default router;