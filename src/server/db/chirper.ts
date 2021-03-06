import { Query } from './index';

/**************
 * this file gives me a headache
 */

const mentionsOfUser = async(name: string) => {
    const userid = await getUserIdFromName(name);
    const chirps = await Query('call spUserMentions(?)', [userid]);
    return chirps[0];
}

const allChirps = async() => Query('SELECT c.id as chirpid, c.userid as userid, c.content as content, u.name as username, u.email as email From chirps c JOIN users u on c.userid = u.id ORDER BY c._created DESC LIMIT 25');

const chirpOfId = async(id: number) => Query('SELECT c.id as chirpid, c.userid as userid, c.content as content, u.name as username FROM chirps c JOIN users u on c.userid = u.id WHERE c.id = ?', [id]);

const ifMentionOfIdDelete = async(id: number) => {
    return Query('DELETE FROM mentions where chirpid = ?', [id]);
}
const deleteChirpOfId = async(id: number, password: string) => {
    ifMentionOfIdDelete(id);
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
        const request = await Query('UPDATE chirps SET content = ? WHERE id = ?', [content, id]);
        let mention = await addMention(content, name);
        return request;
    }
}

const getUserIdFromName = async(name: string) => {
    const request = await Query('SELECT id FROM users WHERE name = ?', [name]);
    if(request.length === 0) {
        return 0;
    } else return request[0].id;
}

const addMention = async(content: string, name: string) => {
    const words = content.split(' ');
    for(let word of words) {
        if(word.startsWith('@')) {
            const chars = word.split('');
            chars.shift();
            let userId = await getUserIdFromName(chars.join(''));
            if(userId !== 0) { //user exists
                console.log(`Username ${chars.join('')} found, adding mention: chirper.ts [addMention()].`);
                let max = await Query('SELECT MAX(id) as id FROM chirps');
                let request = await Query('INSERT INTO mentions (userid, chirpid) values (?, ?)', [userId, max[0].id]);
            } else console.log(`Username: ${chars.join('')} does not exist. no mention added: chirper.ts [addMention()].`);
        }
    }
}

const postChirp = async(name: string, password: string, content: string) => {
    try {
        const checkUser = await selectPassword(name);
        if(checkUser.length === 0 || checkUser[0].password !== password) {
            return 401;
        } else { 
            const insetChirp = await Query('INSERT INTO chirps (userid, content, location) values (?, ?, "A")', [await getUserIdFromName(name), content]);
            let mention = await addMention(content, name);
            return insetChirp;
        }
    } catch(e) { 
        console.error(e);
    }
}

const getChirpsFromName = async(name: string) => {
    const userId = await getUserIdFromName(name);
    if(userId === 0) {
        console.error(`user: ${name} does not exist`);
        return [];
    } else {
        return Query('SELECT c.id as chirpid, c.userid as userid, c.content as content, u.name as username, u.email as email From chirps c JOIN users u on c.userid = u.id WHERE c.userid = ? ORDER BY c._created DESC LIMIT 25', [userId]);
    }
}

const getUsers = async() => Query('SELECT id, name, email, _created FROM users');

export default {
    mentionsOfUser,
    allChirps,
    chirpOfId,
    deleteChirpOfId,
    updateChirp,
    getUserIdFromName,
    getChirpsFromName,
    getUsers,
    postChirp,
}