function markCompleted(task) {
  task.completed = true;
}

function markIncomplete(task) {
  task.completed = false;
}

module.exports = { markCompleted, markIncomplete };