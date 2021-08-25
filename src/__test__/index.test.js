jest.mock('../Assets/CRUD');

const CRUD = require('../Assets/CRUD')

describe('Create Task function', () => {
  test('Do something', () => {
    expect(CRUD.createTask()).toBe('null')
  });
});