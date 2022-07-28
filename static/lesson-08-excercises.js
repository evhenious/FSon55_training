import { initLesson } from './config.js';

initLesson('JS Lesson 08', 'Модуль 4. Заняття 8. Методи перебору масивів.');

//? ----------------------------------------------- питання з таблиці-----------------

//? ----------------------------------------------------------------------------------



// Будемо працювати з даним списком автомобілів
const cars = [
  { make: 'Honda',  model: 'CR-V',     type: 'suv',   amount: 14, price: 24045, onSale: true },
  { make: 'Honda',  model: 'Accord',   type: 'sedan', amount: 2,  price: 22455, onSale: true },
  { make: 'Mazda',  model: 'Mazda 6',  type: 'sedan', amount: 8,  price: 24195, onSale: false },
  { make: 'Mazda',  model: 'CX-9',     type: 'suv',   amount: 7,  price: 31520, onSale: true },
  { make: 'Toyota', model: '4Runner',  type: 'suv',   amount: 19, price: 34210, onSale: false },
  { make: 'Toyota', model: 'Sequoia',  type: 'suv',   amount: 16, price: 45560, onSale: false },
  { make: 'Toyota', model: 'Tacoma',   type: 'truck', amount: 4,  price: 24320, onSale: true },
  { make: 'Ford',   model: 'F-150',    type: 'truck', amount: 11, price: 27110, onSale: true },
  { make: 'Ford',   model: 'Fusion',   type: 'sedan', amount: 13, price: 22120, onSale: true },
  { make: 'Ford',   model: 'Explorer', type: 'suv',   amount: 6,  price: 31660, onSale: false }
];






//? ## Example 0 - Метод map (easy)
/*
  Отримати масив в якому будуть назви моделей наявних авто
*/











//? ## Example 1 - Метод map (not so easy)
/*
  Написати функцію applyDiscount(cars = [], discount = 0), яка буде застосовувати надану знижку (%)
  до ціни кожного автомобіля, і повертати масив з новими даними.
  ! Важливо: початкові дані в масиві cars мають залишатись незмінними
*/

function applyDiscount(cars = [], discount = 0) { }











//? ## Example 2 - Метод filter (easy)
/*
  Написати функцію filterByPrice(limit = 0), яка має фільтрувати автомобілі за ціною, і повертати
  масив авто у яких ціна нижче за переданий ліміт
*/

function filterByPrice(limit = 0) { }











//? ## Example 3 - Метод find
/*
  Функція getCarByModel має повертати об'єкт авто із заданою моделлю
*/

const getCarByModel = (cars = [], model = '') => { };

// приклади
// console.log( getCarByModel(cars, 'F-150') );
// console.log( getCarByModel(cars, 'CX-9') );










//? ## Example 4 - Метод filter + every (not so easy)
/*
  Написати функцію filterBy(cars, filterObject), яка буде отримувати масив, і фільтр у вигляді
  об'єкта з потрібними умовами
*/

const filterByMake = {
  make: (make) => ['Honda', 'Ford'].includes(make)
}

const filterCheapFords = {
  make: (make) => make === 'Ford',
  price: (price) => price < 22_000
}

const filterTrucksOnSale = {
  onSale: (onSale) => onSale === true,
  type: (type) => type === 'truck'
}

/**
 * Отримує об'єкт з фільтрами, і повертає масив із авто для яких
 * кожний фільтр з об'єкта повернув true
 *
 * @param {Object[]} cars
 * @param {Object} filterObject об'єкт з колбеками в якості фільтрів
 *
 * @returns {Object[]}
 */
function filterBy(cars, filterObject) { }










//? ## Example 5 - Метод sort (easy)
/*
  Написати функцію sortByAmountAscending(cars), що повертає новий масив з відсортованими авто
  за значенням в ключі amount, сортування за зростанням
*/

/**
 * @param {Object[]} cars
 */
const sortByAscendingAmount = function (cars = []) { };









//? ## Example 6 - Метод sort (a bit harder)
/*
  Написати функцію sortByAmount(cars, isAsc = true), що повертає новий масив з відсортованими авто.
  Параметр isAsc відповідає за тип сортування - за збільшенням чи за зменшенням кількості
*/

/**
 * @param {Object[]} cars
 * @param {boolean} isAsc
 */
const sortByAmount = function (cars = [], isAsc = true) { };











//? ## Example 7 - Метод reduce
/*
  Написати функцію getTotalAmount яка буде повертати загальну кількість
  авто на складі (одним числом)
*/

/**
 * @param {Object[]} cars
 *
 * @returns {number}
 */
const getTotalAmount = (cars) => { };

// приклад
// console.log( getTotalAmount(cars) );


