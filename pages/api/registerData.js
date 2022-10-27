import executeQuery from "../../lib/db.js";
import checkEmail from "../../lib/checkEmail.js";

export default async function registerData(req, res) {

    if (req.method !== 'POST') {
        res.status(500).json({ message: 'POST ONLY' })
    }

    const body = req.body;

    // fields 
    const name  = body['Nome'];
    const email = body['E-mail'];
    const tel   = body['Telefone'];
    const cid   = body['Cidade']; 
    const uf    = body['UF'];

    // checking email and handling
    const emailExists = await checkEmail(email);

    if (emailExists) {
        res.status(500).json({
            results: 'failure',
            message: 'Esse E-mail já existe em nossa base de dados.'
        });
        return
    } else {
        // data insertion (TODO: ADAPTAR STRINGS DE QUERY SITEWIDE PARA TEMPLATE STRINGS)
        const values = [];
        const query = 'INSERT INTO `emails` (`email_id`, `email_address`, `nome`, `telefone`, `cidade`, `uf`) VALUES (NULL, "'+email+'", "'+name+'", "'+tel+'", "'+cid+'", "'+uf+'")';
        await executeQuery({ query, values });

        res.status(200).json({
            results: 'success',
            message: 'Informações cadastradas com sucesso! :)'
        });
    }


}; 