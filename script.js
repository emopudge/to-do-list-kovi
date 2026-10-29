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

function init() {
  const main = document.createElement('main');
  main.className = 'main';
  main.append(createForm(), createControls(), createTaskList());

  document.body.append(createHeader(), main, createToastContainer());
}

init();