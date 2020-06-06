import { Router } from 'express';

import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuth';

import ProfileController from '@modules/users/infra/http/controllers/ProfileController';

const profileRouter = Router();
const profileController = new ProfileController();

profileRouter.use(ensureAuthenticated);

profileRouter.put('/update', profileController.update);
profileRouter.get('/show', profileController.show);

export default profileRouter;
