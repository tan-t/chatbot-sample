import test from './test';
import development from './development';
import production from './production';

export default function () {
  const envKey = process.env.NODE_ENV || 'development';
  switch (envKey) {
    case 'test':
      return test;
    case 'development':
      return development;
    case 'production':
      return production;
  }
}
