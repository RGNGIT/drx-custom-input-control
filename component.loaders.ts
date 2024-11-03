import { IRemoteControlLoader } from '@directum/sungero-remote-component-types';
import * as BaseInputLoader from './src/loaders/base-input-loader';

// Загрузчики контролов компонента.
const loaders: Record<string, IRemoteControlLoader> = {
  'base-input-loader': BaseInputLoader
};

export default loaders;
