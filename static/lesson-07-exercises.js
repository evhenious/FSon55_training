
//? ## Example 0 - callbacks
/*
  Є функція createProduct, що отримує в параметрах базові дані якогось товару,
  додає в ці дані необхідні ключі (id, дату створення) і повертає
  створений продукт.

  Розширити можливості даної функції - щоб можна було передавати callback Fn,
  який createProduct має виконати в кінці після створення продукта.

  callback в параметрах має отримувати створений продукт
*/

/**
 * Генератор випадкових id
 * @returns {string}
 */
function generateId() {
  return '_' + Math.random().toString(36).slice(2, 9);
}

/**
 * @param {Object} partialData
 * @param {Function} onCreate
 *
 * @returns {Object} new product
 */
function createProduct(partialData, onCreate) { }






//? ## Example 1 - callbacks
/*
  Додайте об'екту `account` методи `withdraw(amount, onSuccess, onError)` і
  deposit(amount, onSuccess, onError)`, де первший параметр - сума операціі, а
  другий і третій - колбеки.

  Метод `withdraw` викликає onError якщо amount більше ніж TRANSACTION_LIMIT або
  this.balance, і onSuccess в інших випадках.

  Метод `deposit` викликає onError якщо amount більше TRANSACTION_LIMIT або менше
  чи дорівнює нулю, і onSuccess в інших випадках.
*/

const TRANSACTION_LIMIT = 1000;

const account = {
  username: 'Mark Zuckerberg',
  balance: 400,

  withdraw(amount = 0) {
    if (amount > TRANSACTION_LIMIT) {
      console.error(`Transaction limit ${TRANSACTION_LIMIT} reached.`);
      return;
    }

    if (amount > this.balance) {
      console.error(`Insufficient balance - ${this.balance}!`);
      return;
    }

    if (!amount) {
      console.error(`Withdraw amount can not be 0!`);
      return;
    }

    // successful Withdraw
    this.balance -= amount;
    console.log(`New account balance: ${this.balance}`);
  },

  deposit(amount = 0) {
    if (amount > TRANSACTION_LIMIT) {
      console.error(`Transaction limit ${TRANSACTION_LIMIT} reached.`);
      return;
    }

    if (amount <= 0) {
      console.error(`Deposit amount must be more than 0!`);
      return;
    }

    // successful Deposit
    this.balance += amount;
    // onSuccess(`New account balance: ${this.balance}`); // тут колбек має приймати значення!
  },
};

// Usage as for now:
account.withdraw(20_000);
account.withdraw(20);
account.withdraw(0);

account.deposit(100);
account.deposit(0);





//? Example 2 - arrow Fn, callback, forEach
/*
  Зробити рефакторінг даного кода - використати forEach вбудований в масив
*/
const logArrayItem = (item) => {
  console.log(`We have: ${item} in callback v2`);
}

/**
 * @param {any[]} items
 */
function logItems(items) {
  for (const item of items) {
    console.log(`We have: ${item}`);
  }
}

logItems(['Sun', 'Mercury', 'Venus', 'Earth', 'Moon', 'Mars']);
logItems([42, 18, 735]);


//? А якщо:
//?  - ми будемо отримувати функцію для виконання ззовні (в параметрах)?





//? Example 3 - arrow Fn, callback, forEach
/*
  Написати функцію executeForEach(array, callback), яка першим параметром отримує
  масив, а другим - callback, який має виконатись для кожного елемента в масиві.

  Функція має повертати новий масив, в якому будуть результати виклику нашого
  callback для елементів з вхідного масиву
*/

function executeForEach(incomingArray = [], callback = () => {}) { }

const testArray = [42, 43, 44];





//? Example 4 - arrow Fn, callback, forEach
/*
  Зробити рефакторінг даного кода - використати forEach вбудований в масив,
  а також стрілочні функції
*/

/**
 * Розбиває строки names і phones на окремі елементи, і виводить в консоль
 * ім'я з відповідним телефонним номером
 * @param {Object} params
 * @param {string} params.names
 * @param {string} params.phones
 */
 function printContactsInfo({ names, phones }) {
  const nameList = names.split(',');
  const phoneList = phones.split(',');

  for (let i = 0; i < nameList.length; i += 1) {
    console.log(`${nameList[i]}: ${phoneList[i]}`);
  }
}
