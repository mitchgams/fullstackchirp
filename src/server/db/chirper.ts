import { Query } from './index';

/**************
 * this file gives me a headache
 */

const allChirps = async() => Query('SELECT c.id as chirpid, c.userid as userid, c.content as content, u.name as username, u.email as email From chirps c JOIN users u on c.userid = u.id ORDER BY c._created DESC LIMIT 25');

const chirpOfId = async(id: number) => Query('SELECT c.id as chirpid, c.userid as userid, c.content as content, u.name as username FROM chirps c JOIN users u on c.userid = u.id WHERE c.id = ?', [id]);

const deleteChirpOfId = async(id: number, password: string) => {
    const user = await Query('SELECT userid FROM chirps WHERE id = ?', [id]);
    const checkUser = await selectPassword(await getUserNameFromId(user[0].userid));
    if(checkUser[0].password !== password) {
        return 401;
    } else {
        return Query('DELETE FROM chirps WHERE id = ?', [id]);
    }
}

const getUserNameFromId = async(id: number) => {
    const user = await Query('SELECT name FROM users WHERE id = ?', [id]);
    return user[0].name;
}

const selectPassword = async(name: string) => Query('SELECT password FROM users WHERE name = ?', [name]);

const updateChirp = async(id: number, content: string, name: string, password: string) => {
    const checkUser = await selectPassword(name);
    if(checkUser[0].password !== password) {
        return 401;
    } else {
        return Query('UPDATE chirps SET content = ? WHERE id = ?', [content, id]);
    }
}

const getUserIdFromName = async(name: string) => {
    const request = await Query('SELECT id FROM users WHERE name = ?', [name]);
    if(request.length === 0) {
        return 0;
    } else return request[0].id;
}

const postChirp = async(name: string, password: string, content: string) => {
    try {
        const checkUser = await selectPassword(name);
        if(checkUser[0].password !== password) {
            return 401;
        } else {
            return Query('INSERT INTO chirps (userid, content, location) values (?, ?, "A")', [await getUserIdFromName(name), content]);
        }
    } catch(e) { // invalid username
        return 401;
    }
}

const getChirpsFromName = async(name: string) => {
    const userId = await getUserIdFromName(name);
    if(userId === 0) {
        console.error(`user: ${name} does not exist`);
    } else {
        return Query('SELECT c.id as chirpid, c.userid as userid, c.content as content, u.name as username, u.email as email From chirps c JOIN users u on c.userid = u.id WHERE c.userid = ? ORDER BY c._created DESC LIMIT 25', [userId]);
    }
}

const getUsers = async() => Query('SELECT * FROM users');


// never used but it stays
const mention = async(name: string) =>  {
    const request = await Query('SELECT * FROM users WHERE name = ?', [name]);
    return request[0];
}

export default {
    allChirps,
    chirpOfId,
    deleteChirpOfId,
    updateChirp,
    getUserIdFromName,
    getChirpsFromName,
    getUsers,
    postChirp,
    mention
}