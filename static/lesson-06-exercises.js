//? ## Example 0 - Деструктуризація
/*
Переписати функцію так, щоб приймала один об'ект параметрів, замість набору
незалежних аргументів.
*/

/**
 * @param {string} weight
 * @param {string} height
 *
 * @returns {number}
 */
function calcBMI(weight, height) {
  const numericWeight = Number(weight.replace(',', '.'));
  const numericHeight = Number(height.replace(',', '.'));
  return Number((numericWeight / numericHeight ** 2).toFixed(1));
}

// Те що зараз:
// console.log(calcBMI('88,3', '1.75'));
// console.log(calcBMI('68,3', '1.65'));
// console.log(calcBMI('118,3', '1.95'));

// Очікується наступне
// console.log(
//   calcBMI({
//     weight: '88,3',
//     height: '1.75',
//   }),
// );

// console.log(
//   calcBMI({
//     weight: '68,3',
//     height: '1,65',
//   }),
// );

// console.log(
//   calcBMI({
//     weight: '118.3',
//     height: '1,95',
//   }),
// );





//? ## Example 1 - Деструктуризація
/*
Переписати функцію так, щоб приймала один об'ект параметрів, замість набору
незалежних аргументів.
*/

function printContactsInfo(names = '', phones = '') {

  const nameList = names.split(',');
  const phoneList = phones.split(',');

  for (let i = 0; i < nameList.length; i += 1) {
    console.log(`user: ${nameList[i]} | tel.: ${phoneList[i]}`);
  }
}

const names = 'Jacob,William,Solomon,Nicolas';
const phones = '89001234567,89001112233,890055566377,890055566300';

// Те що зараз:
// printContactsInfo(names, phones);

// Очікується
// printContactsInfo({
//   names: 'Jacob,William,Solomon,Nicolas',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });


// const arg1 = 'test';
// const arg2 = 42;
// const params = {/* купа всього іншого */};
// function test(arg1, arg2, params);





//? ## Example 2 - Deep destructure
/*
Переписати функцію так, щоб приймала один об'ект параметрів, замість набору
незалежних аргументів.
*/

function getStorageReport(companyName, repairBots, defenceBots) {
  return `${companyName} has ${repairBots + defenceBots} bots in stock`;
}

// Те що зараз:
// console.log(getStorageReport('Cyberdyne Systems', 150, 50));

// Очікується:
// console.log(
//   getStorageReport({
//     companyName: 'Cyberdyne Systems',
//     bots: {
//       repair: 150,
//       defence: 50,
//     }
//   })
// ); // "Cyberdyne Systems has 200 bots in stock"

// //? якщо один із типів ботів опціональний?
// console.log(
//   getStorageReport({
//     companyName: 'Tesla Robot Systems',
//     bots: {
//       repair: 150
//     }
//   })
// ); // "Cyberdyne Systems has 200 bots in stock"





//? ## Example 3 - Деструктуризація
/*
Переписати функцію з Ex.4 так щоб об'єкт параметрів містив властивості
`companyName` і `storage` - щоб функція була універсальною для будь-якої компанії
з будь-яким товаром на складі
*/

function getStockReport(companyName, storage) {
  //?
}

// Приклади очікуваних викликів:
// console.log(
//   getStockReport({
//     companyName: 'Cyberdyne Systems',
//     storage: {
//       repairBots: 150,
//       defenceBots: 50,
//     },
//   }),
// ); // "Cyberdyne Systems has 200 items in stock"

// console.log(
//   getStockReport({
//     companyName: 'Belacci',
//     storage: {
//       shoes: 20,
//       bags: 10,
//       hats: 5,
//     },
//   }),
// ); // "Belacci has 35 item in stock"





//? ## Example 4 - spread
/*
Доповнити функцію `createContact(contactInfo)`так щоб новий контакт створювався
з додаванням властивостей `id` і `createdAt`, а також із
властивістю (`list`: 'default')
якщо властивості list у контакта іще нема
*/

function createContact(contactInfo = {}) { }


/**
 * Генератор випадкових id
 * @returns {string}
 */
function generateId() {
  return '_' + Math.random().toString(36).slice(2, 9);
}


// приклади виклику
// console.log(
//   createContact({
//     name: 'Dan',
//     email: 'danny@some-email.com',
//     list: 'friends',
//   }),
// );

// console.log(
//   createContact({
//     name: 'Natalie',
//     email: 'natalie.summers@another-mail.co.uk',
//   }),
// );





//?  ## Example 5 - rest
/*
Написати функцію `transformUser(user)` так, щоб повертати новий об'єкт
із властивістю `fullName`, замість `firstName` і `lastName`.
*/

function transformUser(user) { }

// приклади:
console.log(
  transformUser({
    id: 1,
    firstName: 'Jacob',
    lastName: 'Mercer',
    email: 'j.mercer@some-mail.com',
    friendCount: 40,
  }),
);

console.log(
  transformUser({
    id: 2,
    firstName: 'Adrian',
    lastName: 'Cross',
    email: 'a.cross@some-new-mail.com',
    friendCount: 20,
  }),
);
