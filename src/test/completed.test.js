const { markCompleted } = require('../status');

describe('markCompleted', () => {
  test('mark a task as completed', () => {
    const task = { description: 'Cleaning the clothes', completed: false };

    // Call the markCompleted function
    markCompleted(task);

    // Check that the completed property was set to true
    expect(task.completed).toBe(true);
  });
});
