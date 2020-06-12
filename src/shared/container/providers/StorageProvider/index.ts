import { container } from 'tsyringe';

import DiskStorageProvider from './implementations/DiskStorageProvader';
import IStorageProvider from './models/IStorageProvider';

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  DiskStorageProvider,
);
