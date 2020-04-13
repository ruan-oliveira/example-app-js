const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
// eh importante que isso venha antes de todas as rotas
app.use(express.json());
app.use(routes);

app.listen(3333);