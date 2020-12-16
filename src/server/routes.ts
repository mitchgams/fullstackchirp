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

router.get('/mentions/:name?', async(req, res) => {
    const name = req.params.name;
    res.json(await db.Chirps.mentionsOfUser(name));
})

router.get('/users/:name?', async(req, res) => {
    const name = req.params.name;
    if(name) {
        const id = await db.Chirps.getUserIdFromName(name);
        console.log(`Fetched userid: ${id} from name: ${name} [/users/${name}]`);
        res.json(id);
    } else {
        res.json(await db.Chirps.getUsers());
    }
});

router.get('/chirps/user/:name?', async(req, res) => {
    const name = req.params.name;
    const request = await db.Chirps.getChirpsFromName(name);
    res.json(request);
});


/**************************
 * I wanted passwords to be required for everything, but at this point
 * I wasn't exactly sure how to go about handling incorrect password/username
 * entries. below is what I came up with. In my chirper.ts if a user/password
 * if invalid it returns 401. the logic below will throw 401 if found and sendStatus(401)
 * to client. Not sure if it was the best way but it works
 */

router.delete('/chirps/delete/:id?', async(req, res) => {
    let id = req.params.id;
     try {
        const request = await db.Chirps.deleteChirpOfId(Number(id), req.body.password);
        if(Number.isInteger(request)) throw request; // invalid password status 401
        res.sendStatus(200);
    } catch(e) {
        // this seems a bit sloppy but it works
        if(e === 401) {
            res.sendStatus(e); 
            console.error(`invalid username or password: status ${e}, chirper.ts router.delete`);
        } else {
            res.sendStatus(500);
        }
    }
});

router.put('/chirps/edit/:id?', async(req, res) => {
    const { chirpid, content, username, password } = req.body;
    try {
        const request = await db.Chirps.updateChirp(Number(chirpid), content, username, password);
        if(Number.isInteger(request)) throw request; // invalid password status 401
        res.sendStatus(200);
    } catch(e) {
        // this seems a bit sloppy but it works
        if(e === 401) {
            res.sendStatus(e); 
            console.error(`invalid username or password: status ${e}, chirper.ts router.put`);
        } else {
            res.sendStatus(500);
        } 
    }
});

router.post('/chirps/post/', async(req, res) => {
    const { name, password, content } = req.body;
    try {
        const request: any = await db.Chirps.postChirp(name, password, content);
        if(Number.isInteger(request)) throw request; //invalid username or password
        res.sendStatus(200);
    } catch(e) {
        // this seems a bit sloppy but it works
        if(e === 401) {
            res.sendStatus(e); 
            console.error(`invalid username or password: status ${e}, chirper.ts router.post`);
        } else {
            res.sendStatus(500);
        }
    }
});


export default router;