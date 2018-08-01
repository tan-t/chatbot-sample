import dotenv from 'dotenv';
import test from './test';
import development from './development';
import production from './production';

export default function () {
  dotenv.config();
  const envKey = process.env.NODE_ENV || 'development';
  switch (envKey) {
    case 'test':
      return test();
    case 'production':
      return production();
    case 'development':
    default:
      return development();
  }
}
