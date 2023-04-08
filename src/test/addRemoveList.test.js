jest.mock('../index.js');
const { deleteTask, addTask } = require('../index');
const { removeItem } = require('../removeList');

describe('test on remove function', () => {
  test('adding a new task', () => {
    expect(addTask({ index: 1, description: 'hello world', completed: false })).toStrictEqual([{ index: 1, description: 'hello world', completed: false }]);
  });
  test('deleting a task', () => {
    expect(deleteTask({ index: 1, description: 'hello world', completed: false })).toStrictEqual([]);
  });
  test('expect to return a function', () => {
    expect(typeof removeItem).toBe('function');
  });
});
