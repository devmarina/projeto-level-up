const express = require('express')
const route = express.Router()
const loginController = require('./controlers/loginController')
const cadastroController = require('./controlers/cadastroController')

// Render login page
route.get('/login', loginController.paginaDeLogin)

// Create new user (login)
route.post('/users', loginController.createUser)

// Create new user (cadastro)
route.post('/cadastro', cadastroController.createUser)

module.exports = route




/*
{Rotas principais}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/conteudos" element={<Conteudos />} />
        <Route path="/flashcards" element={<Flashcards />} />
        <Route path="/revisoes" element={<Revisoes />} />
        <Route path="/questionarios" element={<Questionarios />} />
*/