//create global array of lists
let lists = []
let tasks = []
document.addEventListener('DOMContentLoaded', () => {
  const listForm = document.getElementById('create-list-form')
  const inputInfo = document.getElementById('new-list-title')
  const appContent = document.getElementById("app-content");

  listForm.addEventListener('submit', event => {
    event.preventDefault();
    lists.push({title: inputInfo.value})
    appContent.innerHTML = `${taskLister(lists)}`

    const createTask = document.getElementById('create-task-form')

    if (createTask != null){
      createTask.addEventListener('submit', event => {
        event.preventDefault();
        const title = document.getElementById('parent-list').value
        console.log(title)
        const description = document.getElementById('new-task-description')
        const priority = document.getElementById('new-task-priority')
        const listBox = document.getElementById(title)
        tasks.push({title: list.title, description: description.value, priority: priority.value})
      listBox.innerHTML += `${task(description, priority)}`
      })
    }
  });




  // your solution here
  // grab DOM elements

  // const app = new TaskLister();
});

//iterate through inputinfo
