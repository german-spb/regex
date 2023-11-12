// TODO: write your code here
import sum from './basic';
import { Validator } from './user';

// eslint-disable-next-line no-console
console.log('worked');
// eslint-disable-next-line no-console
console.log(sum([1, 2]));

const validator = new Validator();
// eslint-disable-next-line no-console
console.log(validator.validateUsername('test-user'));
