
import test from './test';
import development from './development';
import production from './production';

export default function(){
const envKey = process.env.NODE_ENV || 'dev';
switch(envKey) {
  case 'test':
  return test;
  case 'dev':
  return development;
  case 'prod':
  return production;
}
}
