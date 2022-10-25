import executeQuery from "../../lib/db.js";

export default async function emailExists(req, res) {

    if (req.method !== 'GET') {
        res.status(500).json({ message: 'GET ONLY' })
    }

    const query = 'SELECT * FROM `emails` WHERE `email_address` LIKE "andre3facchini@gmail.com"';
    const values = [];

    const data = await executeQuery({query, values}); 

    res.status(200).json({
        results: data
    });

}; 