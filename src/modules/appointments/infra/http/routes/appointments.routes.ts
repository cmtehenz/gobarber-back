import { parseISO } from 'date-fns';
import { Router } from 'express';

import ensureAuth from '@shared/infra/http/middlewares/ensureAuth';

import AppointmentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';
import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService';

const appointmentsRouter = Router();

appointmentsRouter.use(ensureAuth);

// appointmentsRouter.get('/', async (req, res) => {
//   const appointmentsRepository = getCustomRepository(AppointmentsRepository);
//   const appointments = await appointmentsRepository.find();

//   return res.json(appointments);
// });

appointmentsRouter.post('/', async (req, res) => {
  const { provider_id, date } = req.body;

  const parseDate = parseISO(date);
  const appointmentsRepository = new AppointmentsRepository();

  const createAppointment = new CreateAppointmentService(
    appointmentsRepository,
  );

  const appointment = await createAppointment.execute({
    date: parseDate,
    provider_id,
  });

  return res.json(appointment);
});

export default appointmentsRouter;
