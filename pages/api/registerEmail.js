import executeQuery from "../../lib/db.js";

export default async function registerEmail(req, res) {

    // const query = 'SELECT * FROM emails';
    // const values = [];

    // const data = await executeQuery({query, values}); 

    res.status(200).json({
        results: 'foo'
    });

}; 