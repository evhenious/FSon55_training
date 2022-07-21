//? ## Example 0 - Базові операції з об'єктами

// Написати скрипт, який послідовно зробить наступні дії з об'єктом 'user':
const user = {
  name: 'Simon',
  age: 25,
  hobby: 'swimming',
  isPremium: true
};

// - додасть нову властивість `mood` із значенням 'happy'

// - замінить значення `hobby` на 'birdwatching'

// - замінить значення `premium` на 'false'

// - виведе все що знаходиться всередині `user` в форматі `ключ:значення`
//   використовуючи `Object.keys()` + цикл `for...of`

// - написати функцію яка буде додавати до об'єкта `user` передану в аргументах
//   властивість та її значення

// видалити ключ hobby із об'єкта





//? ## Example 1
/*
Є об'єкт `order`, який містить послуги одного замовлення на автосервісі
у формати (послуга: ціна). Написати код для виводу суми всього замовлення.
Якщо об'єкт пустий - результат має бути 0.
*/

const order = {
  carWash: 100,
  oilChange: 450,
  tyreRepair: 235
};





//? ## Example 2 - Масив об'єктів
/*
Написати функцію `getPriceOfStones(storage, stoneName)`, що отримує дані про
запаси на складі (у вигляді масиву об'єктів) і потрібну назву товару.
Функція має для заданого каменя повертати загальну вартість запасів
на складі - ціна з урахуванням кількості

Якщо камінь не знайдено - повертати null і кидати помилку в консоль
Якщо камінь є в реєстрі але закінчився (quantity: 0) -
  повертати 0 і кидати ворнінг в консоль
*/

/**
 * @param {Object[]} storage посилання на масив "склада"
 * @param {string} stoneName назва каменя який будемо шукати (e.g. 'Emerald')
 */
function getPriceOfStones(storage, stoneName) {}

// це наш склад дорогоцінних каменів (на ювелирному заводі, чи іще де)
const storageContent = [
  { name: 'Emerald', price: 1300, quantity: 4 },
  { name: 'Diamond', price: 2700, quantity: 3 },
  { name: 'Sapphire', price: 900, quantity: 7 },
  { name: 'Pearl', price: 200, quantity: 0 },
];





//? ## Example 3 - Комплексні задачі. STEREO Bank :)
/*
Написати скрипт для персонального кабінету інтернет-банкінга.
Є головний об'єкт `account`, в який необхідно додати методи роботи
з балансом та історією транзакцій.
*/

/**
 * Типів транзацкій всього два.
 * Можна покласти чи зняти гроші з рахунку.
 */
const TRANSACTIONS = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/**
 * Кожна транзакція це об'ект із полями: id, type, amount
 */
const account = {
  // Поточний баланс
  balance: 0,

  // Історія транзакцій
  transactions: [],

  /**
   * Повертає поточний стан балансу
   * @returns { number }
   */
  getBalance() { },

  /**
   * Створює і повертає нову транзацію за заданим типом і сумою
   * Кожна транзакція це об'ект із полями: id, type, amount
   * @param { number } amount
   * @param { string } type
   *
   * @returns { { id: number, amount: number, type: string } }
   */
  createTransaction(amount, type) { },

  /**
   * Додає суму на баланс.
   * Створює запис в історії транзакцій (викликає для цього createTransaction)
   * @param {number} amount сума яка буде додана на баланс
   */
  deposit(amount) { },

  /**
   * Знімає суму з баланса.
   * Створює запис в історії транзакцій (викликає для цього createTransaction).
   *
   * Якщо недостатньо грошей - повертає null, пише ворнінг в консоль і не додає транзакцію
   * @param {number} amount сума яка буде знята з балансу
   * @returns { number | null }
   */
  withdraw(amount) { },


  /**
   * Шукає транзакцію по заданому id.
   * Повертає null якщо транзакції с таким id не існує
   * @param {number} id id транзакції
   * @returns { Object }
   */
  getTransactionDetails(id) { },

  /**
   * Повертає загальну суму транзакцій даного типу в історії
   * @param { string } type
   * @returns { number }
   */
  getTransactionTotalByType(type) { },
};
