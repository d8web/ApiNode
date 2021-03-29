require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const routes = require('./routes');

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({extended: false}));
server.use('/api', routes);

// Continue to: DevsNotes API: Alterando uma nota

server.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta: http://localhost:${process.env.PORT}`);
})