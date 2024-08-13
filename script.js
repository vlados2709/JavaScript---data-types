// Перша умова
let money = parseFloat(prompt("Введіть суму грошей:"));
let chocolatePrice = parseFloat(prompt("Введіть ціну однієї шоколадки:"));

let chocolatesBought = Math.floor(money / chocolatePrice);
let change = money % chocolatePrice;

alert(`Ви можете купити ${chocolatesBought} шоколадок. Ваша здача: ${change.toFixed(2)} грн.`);

// Друга умова
let number = parseInt(prompt("Введіть тризначне число:"));

let reversedNumber = (number % 10) * 100 + Math.floor((number % 100) / 10) * 10 + Math.floor(number / 100);

alert(`Число задом наперед: ${reversedNumber}`);
