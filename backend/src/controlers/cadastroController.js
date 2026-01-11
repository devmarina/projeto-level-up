const Usuario = require('../models/cadastroModel');

exports.createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Validação básica
    if (!username || !email || !password) {
      return res.status(400).json({ error: 'username, email e password são obrigatórios' });
    }

    // Verifica se usuário já existe
    const existingUser = await Usuario.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(409).json({ error: 'Usuário ou email já cadastrado' });
    }

    // Cria novo usuário
    const user = await Usuario.create({ username, email, password });
    return res.status(201).json({ 
      message: 'Usuário cadastrado com sucesso!',
      user: {
        id: user._id,
        username: user.username,
        email: user.email
      }
    });
  } catch (err) {
    console.log('Erro ao criar usuário:', err);
    return res.status(500).json({ error: 'Erro ao cadastrar usuário' });
  }
}
