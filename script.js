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

function createForm() {
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
    { value: 'q1', text: 'Q1 — горит', title: 'срочно и важно: сдать лабу, оплатить коммуналку' },
    { value: 'q2', text: 'Q2 — растёт', title: 'важно, но не срочно: позвонить маме, записаться к зубному' },
    { value: 'q3', text: 'Q3 — суета', title: 'срочно, но неважно: ответить в чате, бытовая мелочь' },
    { value: 'q4', text: 'Q4 — пустота', title: 'неважно и несрочно: посмотреть тикток, полистать ленту' },
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
  return form;
}

function createControls() {
  const controls = document.createElement('div');
  controls.className = 'controls';

  const search = document.createElement('input');
  search.type = 'search';
  search.id = 'search';
  search.placeholder = 'поиск по названию';
  search.className = 'controls__search';

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
    { value: 'date-asc', text: 'дата ↑' },
    { value: 'date-desc', text: 'дата ↓' },
  ];

  sortOptions.forEach(function (item) {
    const option = document.createElement('option');
    option.value = item.value;
    option.textContent = item.text;
    sort.appendChild(option);
  });

  controls.append(search, filter, sort);
  return controls;
}

function createTaskList() {
  const list = document.createElement('div');
  list.className = 'task-list';
  list.id = 'task-list';
  return list;
}

function createToastContainer() {
  const container = document.createElement('div');
  container.className = 'toasts';
  container.id = 'toasts';
  return container;
}

let tasks = [];

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
  list.textContent = '';

  tasks.forEach(function (task) {
    const card = createTaskCard(task);
    list.appendChild(card);
  });
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

function init() {
  loadTasks();

  const main = document.createElement('main');
  main.className = 'main';
  main.append(createForm(), createControls(), createTaskList());

  document.body.append(createHeader(), main, createToastContainer());

  document.getElementById('task-form').addEventListener('submit', handleFormSubmit);
  
  // делегируем клики по задачам на контейнер
  const list = document.getElementById('task-list');
  list.addEventListener('click', function (event) {
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
  });

  renderTasks();
}
init();