// import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';

import ListProvidersService from './ListProvidersService';

let fakeUsersRepository: FakeUsersRepository;
let listProviders: ListProvidersService;

describe('ListProviders', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();

    listProviders = new ListProvidersService(fakeUsersRepository);
  });

  it('should be able to list the providers ', async () => {
    const user1 = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'john@exemple.com',
      password: 'secret',
    });

    const user2 = await fakeUsersRepository.create({
      name: 'Lucas Doe',
      email: 'john1@exemple.com',
      password: 'secret',
    });

    const loggedUser = await fakeUsersRepository.create({
      name: 'Lucas Loco',
      email: 'lucas@user.com',
      password: 'secret',
    });

    const providers = await listProviders.execute({
      user_id: loggedUser.id,
    });

    expect(providers).toEqual([user1, user2]);
  });
});
