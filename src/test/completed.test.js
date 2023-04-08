jest.mock('../index.js');
const { markCompleted } = require('../status');
const { update, clearAllCompleted } = require('../index');

describe('markCompleted', () => {
  test('expect to mark a task as completed', () => {
    const task = { index: 1, description: 'Cleaning the clothes', completed: false };

    // Call the markCompleted function
    markCompleted(task);

    // Check that the completed property was set to true
    expect(task.completed).toBe(true);
  });

  test('expect to update the description of an item', () => {
    expect(update('on my way to school')).toStrictEqual([{
      index: 1, description: 'on my way to school', completed: true,
    }]);
  });

  test('expect all completed item to be removed', () => {
    expect(clearAllCompleted()).toStrictEqual([]);
  });
});
