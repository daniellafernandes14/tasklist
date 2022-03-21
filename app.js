// Select form, task list, clear btn, filter and task input from html
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

function loadEventListeners() {
  form.addEventListener('submit', addItem);
  taskList.addEventListener('click', removeItem);
  clearBtn.addEventListener('click', removeTasks);
  filter.addEventListener('keyup', filterTasks);
}

function addItem(e) {
  if(taskInput.value === "") {
    alert('Input needed');
  } else {
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fas fa-times"></i>';
    li.appendChild(link);
    taskList.appendChild(li);
    taskInput.value = ""
    e.preventDefault();
  }
}

function removeItem(e) {
  // if statement on the target parent element (a tag) if this element has a class that contains 'delete-item'
  // once we've selected our a tag in our condition, remove the total list item (2 parent tags up)
  // Add confirmation
  if(e.target.parentElement.classList.contains('delete-item')) {
    if(confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

function removeTasks(e) {
  // 1st method
  // taskList.innerHTML = '';
  // 2nd method (faster)
  while(taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
  e.preventDefault();
}

function filterTasks(e) {
  const text = e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach(function(task) {
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });

}
