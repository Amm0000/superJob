// Создаем форму
const form = document.createElement('form');

// Добавляем выпадающий список с выбором башни
const buildingLabel = document.createElement('label');
buildingLabel.textContent = 'Выберите башню: ';
const buildingSelect = document.createElement('select');
buildingSelect.name = 'building';
const buildingOptions = ['А', 'Б'];
buildingOptions.forEach((option) => {
  const buildingOption = document.createElement('option');
  buildingOption.value = option;
  buildingOption.text = option;
  buildingSelect.appendChild(buildingOption);
});
buildingLabel.appendChild(buildingSelect);
form.appendChild(buildingLabel);

// Добавляем выпадающий список с выбором этажа
const floorLabel = document.createElement('label');
floorLabel.textContent = 'Выберите этаж: ';
const floorSelect = document.createElement('select');
floorSelect.name = 'floor';
for (let i = 3; i <= 27; i++) {
  const floorOption = document.createElement('option');
  floorOption.value = i;
  floorOption.text = i;
  floorSelect.appendChild(floorOption);
}
floorLabel.appendChild(floorSelect);
form.appendChild(floorLabel);

// Добавляем выпадающий список с выбором переговорки
const roomLabel = document.createElement('label');
roomLabel.textContent = 'Выберите переговорку: ';
const roomSelect = document.createElement('select');
roomSelect.name = 'room';
for (let i = 1; i <= 10; i++) {
  const roomOption = document.createElement('option');
  roomOption.value = i;
  roomOption.text = `Переговорка ${i}`;
  roomSelect.appendChild(roomOption);
}
roomLabel.appendChild(roomSelect);
form.appendChild(roomLabel);

// Добавляем выбор даты и интервала времени
const dateLabel = document.createElement('label');
dateLabel.textContent = 'Выберите дату: ';
const dateInput = document.createElement('input');
dateInput.type = 'date';
dateInput.name = 'date';
dateInput.required = true;
dateLabel.appendChild(dateInput);
form.appendChild(dateLabel);

const timeLabel = document.createElement('label');
timeLabel.textContent = 'Выберите интервал времени: ';
const startTimeSelect = document.createElement('select');
startTimeSelect.name = 'startTime';
for (let i = 8; i <= 17; i++) {
  const startOption = document.createElement('option');
  startOption.value = i;
  startOption.text = `${i}:00`;
  startTimeSelect.appendChild(startOption);
}
timeLabel.appendChild(startTimeSelect);

const endTimeSelect = document.createElement('select');
endTimeSelect.name = 'endTime';
for (let i = 9; i <= 18; i++) {
  const endOption = document.createElement('option');
  endOption.value = i;
  endOption.text = `${i}:00`;
  endTimeSelect.appendChild(endOption);
}
timeLabel.appendChild(endTimeSelect);

form.appendChild(timeLabel);


// Добавляем поле ввода комментария
const commentLabel = document.createElement('label');
commentLabel.textContent = 'Комментарий: ';
const commentInput = document.createElement('textarea');
commentInput.name = 'comment';
commentLabel.appendChild(commentInput);
form.appendChild(commentLabel);
// Добавляем кнопку "Отправить"
const submitButton = document.createElement('button');
submitButton.type = 'button';
submitButton.textContent = 'Отправить';
submitButton.addEventListener('click', () => {
  const formData = new FormData(form);
  const data = {};
  for (const [name, value] of formData.entries()) {
    data[name] = value;
  }
  console.log(data);
  console.log(JSON.stringify(data)); 
  alert("Данные успешно отправлены!");
  buildingSelect.selectedIndex = 0;
  floorSelect.selectedIndex = 0;
  roomSelect.selectedIndex = 0;
  dateInput.value = '';
  startTimeSelect.selectedIndex = 0;
  endTimeSelect.selectedIndex = 0;
  commentInput.value = '';
});
form.appendChild(submitButton);





// Добавляем кнопку "Очистить"
const clearButton = document.createElement('button');
clearButton.type = 'button';
clearButton.textContent = 'Очистить';
clearButton.addEventListener('click', () => {
buildingSelect.selectedIndex = 0;
floorSelect.selectedIndex = 0;
roomSelect.selectedIndex = 0;
dateInput.value = '';
startTimeSelect.selectedIndex = 0;
endTimeSelect.selectedIndex = 0;
commentInput.value = '';
});
form.appendChild(clearButton);



// Добавляем div для формы 
const formContainer = document.createElement('div');
formContainer.classList.add('form-container');

// Добавляем элементы формы в
formContainer.appendChild(buildingLabel); 
formContainer.appendChild(floorLabel); 
formContainer.appendChild(roomLabel); 
formContainer.appendChild(dateLabel); 
formContainer.appendChild(timeLabel); 
formContainer.appendChild(commentLabel); 

// Добавляем div на страницу 
document.body.appendChild(formContainer); 
document.body.appendChild(form);