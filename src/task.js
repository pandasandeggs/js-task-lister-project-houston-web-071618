function task(description, priority) {
 return `<li>
        Task: ${description.value}
        <button data-list-title="doughnuts" data-task-name="mocha" class="delete-task">
            X
        </button>
        <br>
        Priority: ${priority.value}
      </li>`
}
