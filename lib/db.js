import mysql from 'mysql2/promise';


export default async function executeQuery({ query, values }) {

    const conn = await mysql.createConnection({
        host: process.env.MYSQL_HOST,
        database: process.env.MYSQL_DATABASE,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
    });

    try {
        const results = await conn.execute(query, values);
        await conn.end();
        return results;
    } catch (error) {
        return { error };
    }
}   