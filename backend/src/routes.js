const express = require('express');


const routes = express.Router();

const OngsController = require('./controller/OngsController');
const IncidentController = require('./controller/IncidentController');
const ProfileController = require('./controller/ProfileController');
const SessionController = require('./controller/SessionController');

routes.post('/session',SessionController.create);

routes.get('/ongs', OngsController.index); 
routes.post('/ongs', OngsController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents',IncidentController.index);
routes.post('/incidents',IncidentController.create);
routes.delete('/incidents/:id',IncidentController.delete);


module.exports = routes;