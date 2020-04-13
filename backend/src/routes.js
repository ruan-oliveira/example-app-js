const express = require('express');
// const crypto = require('crypto');
// const connection = require('./database/connection')

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router();

// Rotas e recursos

/**
 * Métodos HTTP
 * 
 * GET: Buscar uma informacao no backend
 * POST: Criar uma informacao no backend
 * PUT: Alterar uma informacao no backend
 * DELETE: Deletar uma informacao no backend
 */

/**
 * Tipos de parametros:
 * 
 * query params: parametros nomeados enviados na rota apos o "?" (filtros, paginacao, etc.)
 * route params: parametros utilizados para identificar recursos
 * request body: corpo da requisicao, utilizado para criar ou alterar recursos.
 */

/**
 * Utilizacao de bancos relacionais:
 * via Driver: SELECT * FROM USERS;
 * via query builder: table('users').select('*').where(...) = forma mais recomendada, pois nao estava presa a particularedades de SGBDs
 * sera utilizado o knex 
 */

// routes.post('/users', (request, response) =>{
//     // return Response.send('Ola mundo!')

//     // exemplo recebimento de query params - rota get
//     //const params = request.query;
//     //console.log(params)

//     // exemplo de recebimento de route params - rota get
//     // const params = request.params;
//     // console.log(params)

//     // exemplo de recebimento de body - rota post
//     const body = request.body;
//     console.log(body)

//     return response.json({
//         evento: 'Semana de estudo',
//         aluno: 'Ruan Oliveira'
//     })
// })

// routes.get('/ongs', async (request, response) => {
//     const ongs = await connection('ongs').select('*');

//     return response.json(ongs);
// });

routes.post('/sessions', SessionController.create)
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index)

routes.post('/incidents', IncidentController.create)
routes.get('/incidents', IncidentController.index)
routes.delete('/incidents/:id', IncidentController.delete)

module.exports = routes;