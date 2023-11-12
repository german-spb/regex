import { loadUser, Validator } from '../user';
import { httpGet } from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should call loadUser once', () => {
  httpGet.mockReturnValue(JSON.stringify({}));

  const response = loadUser(1);
  expect(response).toEqual({});
  expect(httpGet).toHaveBeenCalledWith('http://server:8080/users/1');
});

test('name onlyLetters', () => {
  const validator = new Validator();
  const result = validator.validateUsername('user-name');
  expect(result).toBe(true);
});
test('name noStartNumber', () => {
  const validator = new Validator();
  const result = validator.validateUsername('7user-name');
  expect(result).toBe(false);
});
test('name noEndNumbers', () => {
  const validator = new Validator();
  const result = validator.validateUsername('user-name45');
  expect(result).toBe(false);
});
test('name noThreeDigits', () => {
  const validator = new Validator();
  const result = validator.validateUsername('U4567ser-name');
  expect(result).toBe(false);
});
test('name noStartSymbol', () => {
  const validator = new Validator();
  const result = validator.validateUsername('-User');
  expect(result).toBe(false);
});
