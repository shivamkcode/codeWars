/*Write a simple regex to validate a username. Allowed characters are:

lowercase letters,
numbers,
underscore
Length should be between 4 and 16 characters (both included).

*/

const validateUsr = (username) => {
    return username.length >= 4 && username.length <= 16 && (username.match(/[a-z]|_|\d/g).length === username.length);
};

function validateUsr(username) {
    return /^[0-9a-z_]{4,16}$/.test(username)
}

//Without regex

function validateUsr(username) {
    let name = username.split('');
    let allowed = 'abcdefghijklmnopqrstuvwxyz_1234567890'.split('');
    if ((name.length >= 4) && (name.length <= 16)) {
        let result = [];
        name.forEach((e)=> {
            if (allowed.includes(e)) {
                result.push(true);
            } else {
                result.push(false);
            }
        });
        return result.includes(false) ? false: true
    } else {
        return false;
    };
}