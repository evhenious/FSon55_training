//? ## Example 0 - Базовий приклад на контекст виконання
/*
  Є метод setMood в об'єкта user. Перевикористати метод setMood для
  інших схожих по суті об'єктів
*/

//! default user
const user = {
  name: 'Simon',
  age: 25,
  hobby: 'swimming',
  isPremium: true,
  /**
   * Задає поточний настрій
   * @param {string} currentMood
   */
  setMood(currentMood) {
    this.mood = currentMood;
  },
};

//! even more default dog
const dog = {
  name: 'Jerry',
  age: 3,
  breed: 'husky',
};

// приклад
user.setMood('happy');
console.log(`User ${user.name} now feels ${user.mood}`);

//! це не спрацює зараз
// dog.setMood('not really happy');
// console.log(`Dog ${dog.name} now feels ${dog.mood}`);






//? ## Example 1 - Контекст виконання part 2
/*
  Відрефакторити код, щоб:
  - 1. функція getModelNames стала методом в usedCars
  - 2. getModelNames працював для активного в даний момент менеджера.
  * Якщо addedBy дорівнює null, це означає що авто має бути доступне будь-якому менеджеру
*/

const usedCars = {
  manager: 'Simon',
  storage: [
    { make: 'Honda', model: 'CR-V', type: 'suv', price: 24045, addedBy: 'Simon' },
    { make: 'Mazda', model: 'Mazda 6', type: 'sedan', price: 24195, addedBy: 'Nik' },
    { make: 'Toyota', model: '4Runner', type: 'suv', price: 34210, addedBy: 'Nik' },
    { make: 'Ford', model: 'F-150', type: 'truck', price: 27110, addedBy: 'Simon' },
    { make: 'Ford', model: 'Explorer v2', type: 'suv', price: 31660, addedBy: null },
  ],
  /**
   * Задає ім'я менеджера який працює сьогодні
   * @param {string} managerName
   */
  setActiveManager(managerName) {
    this.manager = managerName;
  },
};

/**
 * Повертає моделі авто доступні для конкретного менеджера
 * @param {Object} carSale
 * @param {string} managerName
 * @returns {string[]} масив з назвами доступних моделей
 */
function getModelNames(carSale, managerName) {
  return carSale.storage
    .filter((car) => car.addedBy === managerName)
    .map((car) => car.model);
}

// приклади
// console.log( getModelNames(usedCars, 'Simon') );
// console.log( getModelNames(usedCars, 'Andrew') );






//? ## Example 2 - Phonebook
/*
  Відрефакторити код, щоб він запрацював як потрібно
*/

function generateId() {
  console.log('ok, i will make a new ID');
}

const phonebook = {
  contacts: [],

  add(contact) {
    const newContact = {
      list: 'default',
      ...contact,
      id: generateId(),
      createdAt: getDate(),
    };
    contacts.push(newContact);
  },

  generateId() {
    return '_' + Math.random().toString(36).substring(2, 9);
  },

  getDate() {
    return Date.now();
  },
};

// console.log(
//   phonebook.add({
//     name: 'Simon',
//     email: 'simonSaysEmailMe@email.com',
//     list: 'friends',
//   }),
// );
// console.log(
//   phonebook.add({
//     name: 'Nicolas',
//     email: 'nn4@very-hot-mail.com',
//   }),
// );






//? ## Example 3 - Винаходимо калькулятор
/*
  Створити об'єкт calculator з такими методами:
  - read(a, b) - приймає два значення і зберігає як властивості об'єкта.
  - add() - повертає суму отриманих раніше значень.
  - mult() - повертає добуток отриманих раніше значень.
*/

const calculator = {
  arg1: null,
  arg2: null,
};

// * якщо нам потрібно буде виконувати метод з калькулятора як колбек?
// * якщо calculator.read також буде якимось колбеком?

const slowManager = {
  name: 'Dolan',
  doMath(calculator, ...numbers) {
    console.log(`Slow manager ${this.name} starts working...`);
    calculator.read(...numbers);

    setTimeout(calculator.add, 5_000); // спрацює через 5 сек
  },
};

// slowManager.doMath(calculator, 8, 2);

// * Додати новий метод evaluate(fn), який зможе отримувати ззовні функцію і виконувати
// * її з нашими числами в об'єкті

const operations = {
  subtract() {
    return this.arg1 - this.arg2;
  },

  pythagor() {
    return +Math.sqrt(this.arg1 ** 2 + this.arg2 ** 2).toFixed(2);
  },
};

// приклад
// console.log( calculator.evaluate(operations.subtract) );
// console.log( calculator.evaluate(operations.pythagor) );
