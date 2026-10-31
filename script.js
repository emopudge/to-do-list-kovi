function createHeader() {
  const header = document.createElement('header');
  header.className = 'header';

  const titleRow = document.createElement('div');
  titleRow.className = 'header__title-row';

  const titleBlock = document.createElement('div');
  
  const title = document.createElement('h1');
  title.className = 'header__title';
  title.textContent = '4 квадранта';

  const subtitle = document.createElement('p');
  subtitle.className = 'header__subtitle';
  subtitle.textContent = 'тетрадка важных дел';

  titleBlock.append(title, subtitle);

  // легенда про матрицу кови
  const legend = document.createElement('div');
  legend.className = 'header__legend';

  const legendText = document.createElement('p');
  legendText.textContent = 'В основе — матрица Эйзенхауэра по методу ';
  
  const link = document.createElement('a');
  link.href = 'https://ru.wikipedia.org/wiki/Матрица_Эйзенхауэра';
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.textContent = 'Стивена Кови';
  link.className = 'header__link';

  legendText.appendChild(link);
  legend.appendChild(legendText);

  titleRow.append(titleBlock, legend);
  
  const stats = document.createElement('div');
  stats.className = 'header__stats';
  stats.id = 'stats';

  header.append(titleRow, stats);
  return header;
}

function createMatrixLegend() {
  const section = document.createElement('section');
  section.className = 'matrix-legend';

  const toggleBtn = document.createElement('button');
  toggleBtn.type = 'button';
  toggleBtn.className = 'matrix-legend__toggle';
  toggleBtn.textContent = 'как это работает? (нажми)';
  
  const grid = document.createElement('div');
  grid.className = 'matrix-legend__grid';
  grid.style.display = 'none'; // по умолчанию скрыта

  // логика раскрытия
  toggleBtn.addEventListener('click', function () {
    const isHidden = grid.style.display === 'none';
    grid.style.display = isHidden ? 'grid' : 'none';
    toggleBtn.textContent = isHidden ? 'скрыть объяснение' : 'как это работает? (нажми)';
  });

  const items = [
    { q: 'q1', title: '🔥 Горит', desc: 'срочно и важно', ex: 'сдать лабу, оплатить налоги' },
    { q: 'q2', title: '🌱 Растёт', desc: 'важно, но не срочно', ex: 'позвонить маме, спорт' },
    { q: 'q3', title: '📞 Суета', desc: 'срочно, но неважно', ex: 'ответить в чате, быт' },
    { q: 'q4', title: '🍿 Пустота', desc: 'неважно и несрочно', ex: 'тикток, полистать ленту' },
  ];

  items.forEach(function (item) {
    const block = document.createElement('div');
    block.className = `matrix-legend__block matrix-legend__block--${item.q}`;

    const title = document.createElement('h3');
    title.className = 'matrix-legend__title';
    title.textContent = item.title;

    const desc = document.createElement('p');
    desc.className = 'matrix-legend__desc';
    desc.textContent = item.desc;

    const ex = document.createElement('p');
    ex.className = 'matrix-legend__ex';
    ex.textContent = item.ex;

    block.append(title, desc, ex);
    grid.appendChild(block);
  });

  section.append(toggleBtn, grid);
  return section;
}

function createForm() {
  const section = document.createElement('section');
  section.className = 'add-section';

  const heading = document.createElement('h2');
  heading.className = 'add-section__heading';
  heading.textContent = 'новая запись';

  const form = document.createElement('form');
  form.className = 'task-form';
  form.id = 'task-form';

  const titleInput = document.createElement('input');
  titleInput.type = 'text';
  titleInput.name = 'title';
  titleInput.placeholder = 'что нужно сделать?';
  titleInput.required = true;
  titleInput.maxLength = 120;
  titleInput.className = 'task-form__input';

  const dateInput = document.createElement('input');
  dateInput.type = 'date';
  dateInput.name = 'date';
  dateInput.required = true;
  dateInput.className = 'task-form__date';

  const quadrantSelect = document.createElement('select');
  quadrantSelect.name = 'quadrant';
  quadrantSelect.className = 'task-form__quadrant';

  const quadrantOptions = [
    { value: 'q1', text: 'Q1 — горит', title: 'срочно и важно' },
    { value: 'q2', text: 'Q2 — растёт', title: 'важно, но не срочно' },
    { value: 'q3', text: 'Q3 — суета', title: 'срочно, но неважно' },
    { value: 'q4', text: 'Q4 — пустота', title: 'неважно и несрочно' },
  ];

  quadrantOptions.forEach(function (item) {
    const option = document.createElement('option');
    option.value = item.value;
    option.textContent = item.text;
    option.title = item.title;
    quadrantSelect.appendChild(option);
  });

  const submit = document.createElement('button');
  submit.type = 'submit';
  submit.className = 'task-form__submit';
  submit.textContent = 'добавить';

  form.append(titleInput, dateInput, quadrantSelect, submit);

  const importBtn = document.createElement('button');
  importBtn.type = 'button';
  importBtn.id = 'import-btn';
  importBtn.className = 'add-section__import-btn';
  importBtn.textContent = 'умный импорт списком';

  section.append(heading, form, importBtn);
  return section;
}

function createControls() {
  const controls = document.createElement('div');
  controls.className = 'controls';

  const search = document.createElement('input');
  search.type = 'search';
  search.id = 'search';
  search.placeholder = 'поиск по названию';
  search.className = 'controls__search';

  const dateFilter = document.createElement('input');
  dateFilter.type = 'date';
  dateFilter.id = 'date-filter';
  dateFilter.className = 'controls__date';
  dateFilter.title = 'показать задачи на конкретный день';

  const filter = document.createElement('select');
  filter.id = 'filter';
  filter.className = 'controls__select';

  const filterOptions = [
    { value: 'all', text: 'все' },
    { value: 'active', text: 'активные' },
    { value: 'done', text: 'выполненные' },
  ];

  filterOptions.forEach(function (item) {
    const option = document.createElement('option');
    option.value = item.value;
    option.textContent = item.text;
    filter.appendChild(option);
  });

  const sort = document.createElement('select');
  sort.id = 'sort';
  sort.className = 'controls__select';

  const sortOptions = [
    { value: 'priority', text: 'по важности' },
    { value: 'date-asc', text: 'дата ↑' },
    { value: 'date-desc', text: 'дата ↓' },
  ];

  sortOptions.forEach(function (item) {
    const option = document.createElement('option');
    option.value = item.value;
    option.textContent = item.text;
    sort.appendChild(option);
  });

  const viewToggle = document.createElement('button');
  viewToggle.type = 'button';
  viewToggle.id = 'view-toggle';
  viewToggle.className = 'controls__toggle';
  viewToggle.textContent = 'вид: список';
  viewToggle.title = 'переключить на матрицу';

  const importBtn = document.createElement('button');
  importBtn.type = 'button';
  importBtn.id = 'import-btn';
  importBtn.className = 'controls__toggle'; 
  importBtn.textContent = 'умный импорт';

  controls.append(search, dateFilter, filter, sort, viewToggle);
  return controls;
}

function createTaskList() {
  const list = document.createElement('div');
  list.className = 'task-list';
  list.id = 'task-list';
  return list;
}

function createMatrixBoard() {
  const board = document.createElement('div');
  board.className = 'matrix-board';
  board.id = 'matrix-board';
  board.style.display = 'none';

  const quadrantsInfo = {
    q1: { title: '🔥 Горит', desc: 'срочно и важно', ex: 'сдать лабу, оплатить налоги' },
    q2: { title: '🌱 Растёт', desc: 'важно, но не срочно', ex: 'позвонить маме, спорт' },
    q3: { title: '📞 Суета', desc: 'срочно, но неважно', ex: 'ответить в чате, быт' },
    q4: { title: '🍿 Пустота', desc: 'неважно и несрочно', ex: 'тикток, полистать ленту' },
  };

  const quadrants = ['q1', 'q2', 'q3', 'q4'];
  
  quadrants.forEach(function (q) {
    const col = document.createElement('div');
    col.className = `matrix-col matrix-col--${q}`;
    col.dataset.quadrant = q;

    const info = quadrantsInfo[q];

    const header = document.createElement('div');
    header.className = 'matrix-col__header';

    const title = document.createElement('h3');
    title.className = 'matrix-col__title';
    title.textContent = info.title;

    const desc = document.createElement('p');
    desc.className = 'matrix-col__desc';
    desc.textContent = info.desc;

    const ex = document.createElement('p');
    ex.className = 'matrix-col__ex';
    ex.textContent = info.ex;

    header.append(title, desc, ex);
    col.appendChild(header);
    board.appendChild(col);
  });

  return board;
}

function createToastContainer() {
  const container = document.createElement('div');
  container.className = 'toasts';
  container.id = 'toasts';
  return container;
}

let tasks = [];
let currentView = 'list'; // 'list' или 'matrix'
let currentDateFilter = '';

function loadTasks() {
  const saved = localStorage.getItem('kovi-tasks');
  if (saved) {
    tasks = JSON.parse(saved);
  }
}

function saveTasks() {
  localStorage.setItem('kovi-tasks', JSON.stringify(tasks));
}

function createTaskCard(task) {
  const card = document.createElement('article');
  card.className = `task-card task-card--${task.quadrant}`;
  card.dataset.id = task.id;
  card.draggable = true; 
  
  // если задача выполнена, добавляем модификатор
  if (task.done) {
    card.classList.add('task-card--done');
  }

  const header = document.createElement('div');
  header.className = 'task-card__header';

  const title = document.createElement('h3');
  title.className = 'task-card__title';
  title.textContent = task.title;

  const date = document.createElement('time');
  date.className = 'task-card__date';
  date.dateTime = task.date;
  date.textContent = new Date(task.date).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'short',
  });

  header.append(title, date);

  const footer = document.createElement('div');
  footer.className = 'task-card__footer';

  const badge = document.createElement('span');
  badge.className = 'task-card__badge';
  badge.textContent = task.quadrant.toUpperCase();

  const actions = document.createElement('div');
  actions.className = 'task-card__actions';

  const doneBtn = document.createElement('input');
  doneBtn.type = 'checkbox';
  doneBtn.className = 'task-card__checkbox';
  doneBtn.checked = task.done;
  doneBtn.title = 'отметить выполненной';

  const editBtn = document.createElement('button');
  editBtn.className = 'task-card__btn task-card__btn--edit';
  editBtn.textContent = '✏️';
  editBtn.title = 'редактировать';

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'task-card__btn task-card__btn--delete';
  deleteBtn.textContent = '✕';
  deleteBtn.title = 'удалить';

  actions.append(doneBtn, editBtn, deleteBtn);
  footer.append(badge, actions);
  card.append(header, footer);
  
  return card;
}

function toggleTask(id) {
  const task = tasks.find(function (t) {
    return t.id === id;
  });
  if (task) {
    task.done = !task.done;
    saveTasks();
    renderTasks();
  }
}

function deleteTask(id) {
  tasks = tasks.filter(function (t) {
    return t.id !== id;
  });
  saveTasks();
  renderTasks();
}

function editTask(id) {
  const task = tasks.find(function (t) {
    return t.id === id;
  });
  if (!task) return;

  // запрашиваем новые данные через нативные окна браузера
  const newTitle = prompt('новое название задачи:', task.title);
  if (newTitle === null) return; // если нажали отмену
  
  const newDate = prompt('новая дата (ГГГГ-ММ-ДД):', task.date);
  if (newDate === null) return;

  if (newTitle.trim()) task.title = newTitle.trim();
  if (newDate.trim()) task.date = newDate.trim();

  saveTasks();
  renderTasks();
}

function renderTasks() {
  const list = document.getElementById('task-list');
  const board = document.getElementById('matrix-board');
  
  list.textContent = '';
  board.querySelectorAll('.task-card').forEach(el => el.remove());

  // применяем фильтры
  let filtered = tasks;
  
  const searchQuery = document.getElementById('search').value.trim().toLowerCase();
  if (searchQuery) {
    filtered = filtered.filter(t => t.title.toLowerCase().includes(searchQuery));
  }

  const statusFilter = document.getElementById('filter').value;
  if (statusFilter === 'active') {
    filtered = filtered.filter(t => !t.done);
  } else if (statusFilter === 'done') {
    filtered = filtered.filter(t => t.done);
  }

  const dateFilter = document.getElementById('date-filter').value;
  if (dateFilter) {
    filtered = filtered.filter(t => t.date === dateFilter);
  }

  // сортировка
  const sortVal = document.getElementById('sort').value;
  filtered.sort(function (a, b) {
    if (sortVal === 'priority') {
      // сортируем по названию квадранта: q1, q2, q3, q4
      return a.quadrant.localeCompare(b.quadrant);
    }
    if (sortVal === 'date-asc') return new Date(a.date) - new Date(b.date);
    return new Date(b.date) - new Date(a.date);
  });

    const legend = document.querySelector('.matrix-legend');

  if (currentView === 'list') {
    legend.style.display = 'grid'; // показываем легенду в списке
    list.style.display = 'flex';
    board.style.display = 'none';
    
    filtered.forEach(function (task) {
      list.appendChild(createTaskCard(task));
    });
  } else {
    legend.style.display = 'none'; // скрываем легенду в матрице
    list.style.display = 'none';
    board.style.display = 'grid';

    filtered.forEach(function (task) {
      const col = board.querySelector(`[data-quadrant="${task.quadrant}"]`);
      if (col) {
        const card = createTaskCard(task);
        card.classList.add('task-card--compact');
        col.appendChild(card);
      }
    });
  }
}

function guessQuadrant(title) {
  const text = title.toLowerCase();

  if (text.includes('q1') || text.includes('1 квадрант') || text.includes('срочно важно')) return 'q1';
  if (text.includes('q2') || text.includes('2 квадрант') || text.includes('важно несрочно')) return 'q2';
  if (text.includes('q3') || text.includes('3 квадрант') || text.includes('срочно неважно')) return 'q3';
  if (text.includes('q4') || text.includes('4 квадрант') || text.includes('неважно несрочно')) return 'q4';

  // используем корни слов, чтобы ловить любые формы
  const q1Roots = ['лр', 'дз', 'дедлайн', 'сда', 'экзамен', 'сесс', 'налог', 'оплат', 'защит'];
  const q2Roots = ['звон', 'мам', 'пап', 'спорт', 'зуб', 'врач', 'книг', 'учеб', 'развит'];
  const q3Roots = ['ответ', 'чат', 'куп', 'быт', 'убра', 'готов', 'встреч', 'забер', 'отнес'];
  
  // проверяем, есть ли в тексте хотя бы один из корней
  if (q1Roots.some(root => text.includes(root))) return 'q1';
  if (q2Roots.some(root => text.includes(root))) return 'q2';
  if (q3Roots.some(root => text.includes(root))) return 'q3';
  
  return 'q4'; // по умолчанию, если ничего не подошло
}

function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.target;

  const newTask = {
    id: Date.now().toString(),
    title: form.elements.title.value.trim(),
    date: form.elements.date.value,
    quadrant: form.elements.quadrant.value,
    done: false,
  };

  tasks.push(newTask);
  saveTasks();
  renderTasks();
  form.reset();
}

function handleTaskClick(event) {
  const card = event.target.closest('.task-card');
  if (!card) return;
  const id = card.dataset.id;

  if (event.target.classList.contains('task-card__checkbox')) {
    toggleTask(id);
  } else if (event.target.classList.contains('task-card__btn--delete')) {
    deleteTask(id);
  } else if (event.target.classList.contains('task-card__btn--edit')) {
    editTask(id);
  }
}

function createImportModal() {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.id = 'import-modal';
  overlay.style.display = 'none'; // скрыто по умолчанию

  const modal = document.createElement('div');
  modal.className = 'modal';

  const title = document.createElement('h2');
  title.className = 'modal__title';
  title.textContent = 'умный импорт';

  const hint = document.createElement('p');
  hint.className = 'modal__hint';
  hint.textContent = 'вставь задачи, каждую с новой строки. я сама раскидаю их по квадрантам!';

  const textarea = document.createElement('textarea');
  textarea.className = 'modal__textarea';
  textarea.id = 'import-textarea';
  textarea.placeholder = 'сдать лабу завтра\nпозвонить маме\nкупить хлеб';

  const actions = document.createElement('div');
  actions.className = 'modal__actions';

  const cancelBtn = document.createElement('button');
  cancelBtn.className = 'modal__btn modal__btn--cancel';
  cancelBtn.textContent = 'отмена';

  const submitBtn = document.createElement('button');
  submitBtn.className = 'modal__btn modal__btn--submit';
  submitBtn.textContent = 'распределить';

  actions.append(cancelBtn, submitBtn);
  modal.append(title, hint, textarea, actions);
  overlay.appendChild(modal);
  return overlay;
}

function init() {
  loadTasks();

  const main = document.createElement('main');
  main.className = 'main';
  main.append(createMatrixLegend(), createForm(), createControls(), createTaskList(), createMatrixBoard());

  document.body.append(createHeader(), main, createToastContainer(), createImportModal());

  document.getElementById('task-form').addEventListener('submit', handleFormSubmit);
  
  // обработчики фильтров
  document.getElementById('search').addEventListener('input', renderTasks);
  document.getElementById('filter').addEventListener('change', renderTasks);
  document.getElementById('sort').addEventListener('change', renderTasks);
  document.getElementById('date-filter').addEventListener('change', renderTasks);

  // переключение вида
  document.getElementById('view-toggle').addEventListener('click', function(event) {
    currentView = currentView === 'list' ? 'matrix' : 'list';
    event.target.textContent = currentView === 'list' ? 'вид: список' : 'вид: матрица';
    renderTasks();
  });

  // делегирование кликов
  document.getElementById('task-list').addEventListener('click', handleTaskClick);
  document.getElementById('matrix-board').addEventListener('click', handleTaskClick);


  function initDragAndDrop() {
    let draggedTaskId = null;

    document.addEventListener('dragstart', function (event) {
      const card = event.target.closest('.task-card');
      if (!card) return;

      draggedTaskId = card.dataset.id;
      card.classList.add('dragging');
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData('text/plain', draggedTaskId);
    });

    document.addEventListener('dragend', function (event) {
      const card = event.target.closest('.task-card');
      if (card) card.classList.remove('dragging');

      document.querySelectorAll('.matrix-col').forEach(function (col) {
        col.classList.remove('drag-over');
      });

      draggedTaskId = null;
    });

    const board = document.getElementById('matrix-board');
    if (!board) return;

    board.addEventListener('dragover', function (event) {
      const col = event.target.closest('.matrix-col');
      if (!col) return;

      event.preventDefault();
      event.dataTransfer.dropEffect = 'move';

      document.querySelectorAll('.matrix-col').forEach(function (c) {
        c.classList.remove('drag-over');
      });
      col.classList.add('drag-over');
    });

    board.addEventListener('drop', function (event) {
      const col = event.target.closest('.matrix-col');
      if (!col || !draggedTaskId) return;

      event.preventDefault();

      const newQuadrant = col.dataset.quadrant;
      const task = tasks.find(function (t) {
        return t.id === draggedTaskId;
      });

      if (task && task.quadrant !== newQuadrant) {
        task.quadrant = newQuadrant;
        saveTasks();
        renderTasks();
      }

      col.classList.remove('drag-over');
      draggedTaskId = null;
    });

  const modal = document.getElementById('import-modal');
  const importBtn = document.getElementById('import-btn');
  const cancelBtn = modal.querySelector('.modal__btn--cancel');
  const submitBtn = modal.querySelector('.modal__btn--submit');
  const textarea = document.getElementById('import-textarea');

  importBtn.addEventListener('click', function () {
    modal.style.display = 'flex';
    textarea.focus();
  });

  cancelBtn.addEventListener('click', function () {
    modal.style.display = 'none';
    textarea.value = '';
  });

  // закрытие по клику на темный фон
  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      modal.style.display = 'none';
      textarea.value = '';
    }
  });

  submitBtn.addEventListener('click', function () {
    const text = textarea.value;
    if (!text.trim()) return;

    const lines = text.split('\n').filter(line => line.trim() !== '');
    
    lines.forEach(function(line) {
      const title = line.trim();
      const quadrant = guessQuadrant(title);
      
      const newTask = {
        id: Date.now().toString() + Math.random().toString(36).substring(2, 5),
        title: title,
        date: new Date().toISOString().split('T')[0],
        quadrant: quadrant,
        done: false,
      };
      
      tasks.push(newTask);
    });

    saveTasks();
    renderTasks();
    
    modal.style.display = 'none';
    textarea.value = '';
  });

  }

  renderTasks();
  initDragAndDrop();
}

init();