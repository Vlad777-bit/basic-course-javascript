'use strict';

function getDigitsOfNumbers(num) {
  if (!Number.isInteger(num) || num < 0 || num > 999) {
    alert('Значение аргумента должно быть целым в диапазоне от 0 до 999');
    return {};
  } else {
    return {
      firstDigit: Math.floor(num / 100),
      secondDigit: Math.floor((num / 10) % 10),
      thirdDigit: num % 10,
    };
  }
}

function task_1() {
  console.log(getDigitsOfNumbers(+prompt('Введите число от 0 до 999')));
}
