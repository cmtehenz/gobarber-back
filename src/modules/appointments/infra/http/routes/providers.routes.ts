import { celebrate, Segments, Joi } from 'celebrate';
import { Router } from 'express';

import ensureAuth from '@shared/infra/http/middlewares/ensureAuth';

import ProviderDayAvailabilityController from '@modules/appointments/infra/http/controllers/ProviderDayAvailabilityController';
import ProviderMonthAvailabilityController from '@modules/appointments/infra/http/controllers/ProviderMonthAvailabilityController';
import ProvidersController from '@modules/appointments/infra/http/controllers/ProvidersController';

const providersRouter = Router();
const providersController = new ProvidersController();
const providerDayController = new ProviderDayAvailabilityController();
const providerMonthController = new ProviderMonthAvailabilityController();

providersRouter.use(ensureAuth);

providersRouter.get('/', providersController.index);
providersRouter.get(
  '/:provider_id/month-availability',
  celebrate({
    [Segments.PARAMS]: {
      provider_id: Joi.string().uuid().required(),
    },
  }),
  providerMonthController.index,
);
providersRouter.get(
  '/:provider_id/day-availability',
  celebrate({
    [Segments.PARAMS]: {
      provider_id: Joi.string().uuid().required(),
    },
  }),
  providerDayController.index,
);

export default providersRouter;
