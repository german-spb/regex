import { httpGet } from './http';

export function loadUser(id) {
  const data = httpGet(`http://server:8080/users/${id}`);
  return JSON.parse(data);
}

// eslint-disable-next-line no-unused-vars
export function saveUser(user) {
  throw new Error('Unimplemented');
}

export class Validator {
  validateUsername(userName) {
    this.onlyLetters = /^[A-Za-z0-9_-]+$/;
    this.noStartNumber = /^[^0-9_-]/;
    this.noEndNumbers = /[^0-9_-]$/;
    this.noThreeDigits = /^(?:(?!\d{4}).)*$/;
    return (
      this.onlyLetters.test(userName)
      && this.noStartNumber.test(userName)
      && this.noEndNumbers.test(userName)
      && this.noThreeDigits.test(userName)
    );
  }
}
