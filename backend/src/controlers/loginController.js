const Login = require('../models/loginModel');

exports.paginaDeLogin = (req, res) => {
    res.render('Login');
}

exports.autenticar = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res.status(400).send('All fields are required.');
        }

        const usuario = await Login.findOne({ email });

        if(!usuario) {
            return res.status(401).json({error: 'username or password incorrect' })
        }

        if (usuario.password !== password){
            return res.status(401).json({error: 'Username or Password incorrect'})
        }

        return res.status(200).json({
            message: 'Login sucessful',
            usuario: {
                id: usuario.id,
                username: usuario.username
            }

        });
    }
    catch (err) {
        console.log('Erro ao autenticar', err)
        return res.status(500).json({ error: 'internal server error' });
    }
}