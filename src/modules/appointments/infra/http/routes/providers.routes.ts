import { Router } from 'express';

import ensureAuth from '@shared/infra/http/middlewares/ensureAuth';

import ProvidersController from '@modules/appointments/infra/http/controllers/ProvidersController';

const providersRouter = Router();
const providersController = new ProvidersController();

providersRouter.use(ensureAuth);

providersRouter.get('/', providersController.index);

export default providersRouter;
