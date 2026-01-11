const Login = require('../models/loginModel');

exports.listarTodosUsuarios = async (req, res) => {
  try {
    const usuarios = await Login.find({}, { email: 1, username: 1, _id: 1 });
    console.log('Total de usuários:', usuarios.length);
    console.log('Usuários:', usuarios);
    return res.status(200).json({ total: usuarios.length, usuarios });
  } catch (err) {
    console.log('Erro ao listar usuários:', err);
    return res.status(500).json({ error: 'internal server error' });
  }
}

exports.paginaDeLogin = (req, res) => {
    return res.redirect('http://localhost:5173/')
}

exports.autenticar = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // exige senha e (username ou email)
        if (!password || (!username && !email)) {
            return res.status(400).json({ error: 'username/email and password required' });
        }

        // usa email ou username como identificador (pode vir com qualquer nome)
        const identificador = email || username;
        
        console.log('Autenticação recebida, identificador:', identificador);
        
        // DEBUG: lista todos os usuários no banco
        const todosUsuarios = await Login.find({});
        console.log('Total de usuários no banco:', todosUsuarios.length);
        console.log('Usuários completos:', JSON.stringify(todosUsuarios, null, 2));
        
        // Procura por username OU email (com $or)
        const usuario = await Login.findOne({
          $or: [
            { username: identificador },
            { email: identificador }
          ]
        });

        console.log('Usuário encontrado:', usuario ? 'SIM' : 'NÃO');
        if (!usuario) {
          console.log('Usuário NÃO existe no banco com:', identificador);
          return res.status(401).json({ error: 'username or password incorrect' });
        }

        console.log('Senha recebida:', password);
        console.log('Senha no banco:', usuario.password);
        if (usuario.password !== password) {
          console.log('Senha incorreta!');
          return res.status(401).json({ error: 'username or password incorrect' });
        }
        
        console.log('✅ Autenticação bem-sucedida para:', usuario.email || usuario.username);

        const safeUser = { id: usuario._id, username: usuario.username };

        return res.status(200).json({
            message: 'Login successful',
            usuario: safeUser
        });
    }
    catch (err) {
        console.log('Erro ao autenticar', err)
        return res.status(500).json({ error: 'internal server error' });
    }
}
