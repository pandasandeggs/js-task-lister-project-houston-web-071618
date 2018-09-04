function taskLister(lists) {
  let optionHTML = ""
  let listHTML = ""
  for(list of lists){
    optionHTML += `<option value= "${list.title}" id = "option" selected>
      ${list.title}
    </option>`
    listHTML += renderList(list)
  }

  return `
  <div id="app-content">
    <form id="create-task-form">
      <label for="parent-list">Select List:</label>
      <select id="parent-list">
      ${optionHTML}
      </select>

      <label for="new-task-description">Task description:</label>
      <input required type="text" id="new-task-description" placeholder="description">

      <label for="new-task-priority">Priority level:</label>
      <input type="text" id="new-task-priority" placeholder="priority">
      <input type="submit" value="Create New Task">
    </form>
    ${listHTML}
  </div>`
  // render() {
  //   return (`<h1>Welcome to Flavortown</h1>`);
  // }
}
