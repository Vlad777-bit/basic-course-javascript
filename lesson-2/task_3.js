'use strict';

function task_3() {
  const a = getRandomNumber(100);
  const b = getRandomNumber(200);

  if (a > 0 && b > 0) {
    console.log(`Разность чисел ${a} - ${b} = ${a - b}`);
  } else if (a < 0 && b < 0) {
    console.log(`Произведение чисел ${a} * ${b} = ${a * b}`);
  } else if ((a <= 0 && b >= 0) || (a >= 0 && b <= 0)) {
    console.log(`Сумма чисел ${a} + ${b} = ${a + b}`);
  } else {
    console.log('Вы ввели некорректное число!');
  }
}

function getRandomNumber(num) {
  return Math.floor((Math.random() - 0.5) * num);
}
