document.addEventListener('DOMContentLoaded', () => {
  const tasks = [];
  const taskList = document.getElementById('tasks');
  const inputTask = document.getElementById('newTask');
  const addTaskBtn = document.getElementById('addTask');
  const searchInput = document.getElementById('search');

  function renderTasks(filter='') {
    taskList.innerHTML = '';
    tasks
      .filter(t => t.text.toLowerCase().includes(filter.toLowerCase()))
      .forEach((t, i) => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.draggable = true;
        li.textContent = t.text;
        li.dataset.index = i;

        const delBtn = document.createElement('button');
        delBtn.className = 'btn btn-sm btn-danger';
        delBtn.textContent = '×';
        delBtn.onclick = () => {
          tasks.splice(i, 1);
          updateChart();
          renderTasks(searchInput.value);
        };
        li.appendChild(delBtn);
        taskList.appendChild(li);
      });
  }

  addTaskBtn.onclick = () => {
    const val = inputTask.value.trim();
    if(val){
      tasks.push({ text: val });
      inputTask.value = '';
      renderTasks(searchInput.value);
      updateChart();
    }
  };

  searchInput.oninput = () => {
    renderTasks(searchInput.value);
  };

  // Drag & drop
  let dragSrcIndex = null;
  taskList.addEventListener('dragstart', e => {
    dragSrcIndex = +e.target.dataset.index;
    e.target.classList.add('dragging');
  });
  taskList.addEventListener('dragend', e => {
    e.target.classList.remove('dragging');
  });
  taskList.addEventListener('dragover', e => {
    e.preventDefault();
    const tgt = e.target.closest('li');
    if(!tgt || tgt.classList.contains('dragging')) return;
    const tgtIndex = +tgt.dataset.index;
    if(dragSrcIndex === null || tgtIndex === dragSrcIndex) return;

    const draggedTask = tasks[dragSrcIndex];
    tasks.splice(dragSrcIndex,1);
    tasks.splice(tgtIndex,0,draggedTask);
    dragSrcIndex = tgtIndex;
    renderTasks(searchInput.value);
  });

  renderTasks();

  // - chart.js file to sync data
  window.getTasksForChart = () => tasks.length;
});
