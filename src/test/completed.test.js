jest.mock('../index.js');
const { markCompleted } = require('../status');
const { update, clearCompletedTasks } = require('../index');

describe('markCompleted', () => {
  test('expect to mark a task as completed', () => {
    const task = { index: 1, description: 'Cleaning the clothes', completed: false };

    // Call the markCompleted function
    markCompleted(task);

    // Check that the completed property was set to true
    expect(task.completed).toBe(true);
  });

  test('returns an empty array if given an empty array', () => {
    const tasks = [];
    const result = clearCompletedTasks(tasks);
    expect(result).toEqual([]);
  });

  test('returns an array of incomplete tasks', () => {
    const tasks = [
      { id: 1, description: 'Task 1', completed: true },
      { id: 2, description: 'Task 2', completed: false },
      { id: 3, description: 'Task 3', completed: true },
      { id: 4, description: 'Task 4', completed: false },
    ];
    const result = clearCompletedTasks(tasks);
    expect(result).toEqual([
      { id: 2, description: 'Task 2', completed: false },
      { id: 4, description: 'Task 4', completed: false },
    ]);
  });

  test('returns an array of incomplete tasks when given an array with only completed tasks', () => {
    const tasks = [
      { id: 1, description: 'Task 1', completed: true },
      { id: 2, description: 'Task 2', completed: true },
      { id: 3, description: 'Task 3', completed: true },
    ];
    const result = clearCompletedTasks(tasks);
    expect(result).toEqual([]);
  });

  test('expect to update the description of an item', () => {
    expect(update('on my way to school')).toStrictEqual([{
      index: 1, description: 'on my way to school', completed: true,
    }]);
  });
});
