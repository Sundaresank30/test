Scenario: Task management system pending tasks-ku badhila completed tasks-ai display pannudhu.
Task for employee:
- Find the incorrect filter condition.
- Return only pending tasks.
- Verify the output.
- Commit the fix.

  
const tasks = [
  { id: 1, title: "Fix login bug", completed: true },
  { id: 2, title: "Update API", completed: false },
  { id: 3, title: "Write tests", completed: false }
];

function getPendingTasks(tasks) {
  return tasks.filter(task => task.completed === true);
}

console.log(getPendingTasks(tasks));
