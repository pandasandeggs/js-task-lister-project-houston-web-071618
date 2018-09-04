function renderList(list){
  return `<div id="lists">
  <div id = "${list.title}">
    <h2>${list.title}
      <button data-title="doughnuts" class="delete-list">
        X
      </button>
    </h2>
    <ul>
    ${task(description, priority)}
    </ul>
  </div>
</div>`
}
