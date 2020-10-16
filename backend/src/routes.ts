import { Router } from 'express';

import ProfessionalController from './controllers/ProfessionalController';

const routes = Router();

routes.get('/list', ProfessionalController.index);
routes.get('/professinal/:id', ProfessionalController.show);
routes.post('/professinals', ProfessionalController.create);

export default routes;
