import executeQuery from "./db.js";

export default async function checkEmail(email) {
    const query = 'SELECT * FROM `emails` WHERE `email_address` LIKE "' + email + '"';
    const values = [];
    const data = await executeQuery({query, values}); 

    return typeof data[0] !== 'undefined' && data[0].length > 0;
};