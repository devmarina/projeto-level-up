require('dotenv').config()
const express = require('express')
const app = express();
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')
const path = require('path')

// Habilita CORS para requisições do frontend
app.use(cors())


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.resolve(__dirname, 'public')))

mongoose.connect(process.env.CONNECTIONSTRING)
  .then(() => {
    console.log('MongoDB conectado')
    app.emit('pronto')
  })
  .catch(e => console.log(e))

app.use(routes)
app.get("/", (req, res) => {
  res.send('Eae mermão eu to ligadasso aqui');
});
app.on('pronto', () => {
  app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
    console.log("Acesse o frontend em http://localhost:5173");
  });
})

// FizG2adBRFMNmxlZ