import { Router } from 'express';

import ProfessionalController from './controllers/ProfessionalController';
import SessionsController from './controllers/SessionsController';
import ProfileController from './controllers/ProfileController';

const routes = Router();

// -> sessions
routes.post('/sessions', SessionsController.create);

// -> professinals
routes.get('/list', ProfessionalController.index);
routes.get('/professinal/:id', ProfessionalController.show);
routes.post('/professinals', ProfessionalController.create);

// -> profile
routes.get('/profile', ProfileController.show);

export default routes;
