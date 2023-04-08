jest.mock('../index.js');
const { clearCompletedTasks } = require('../index');
const { markCompleted } = require('../status');

describe('markCompleted', () => {
  test('mark a task as completed', () => {
    const task = { description: 'Cleaning the clothes', completed: false };

    // Call the markCompleted function
    markCompleted(task);

    // Check that the completed property was set to true
    expect(task.completed).toBe(true);
  });
  describe('clearCompletedTasks', () => {
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
  });
});
