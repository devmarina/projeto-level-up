const Login = require('../models/loginModel');

exports.paginaDeLogin = (req, res) => {
    res.render('Login');
}

exports.createUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) return res.status(400).json({ error: 'username and password required' });

        const existing = await Login.findOne({ username });
        if (existing) return res.status(409).json({ error: 'username already exists' });

        const user = await Login.create({ username, password });
        return res.status(201).json(user);
    } catch (err) {
        console.log('Erro ao criar usuário:', err);
        return res.status(500).json({ error: 'internal server error' });
    }
}