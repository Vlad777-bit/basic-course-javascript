'use strict';

function getCase(num) {
  const beforeLasteDigit = getDigitBeforeLaste(num);

  if (beforeLasteDigit === 1) {
    return 'рублей';
  }

  num = String(num);

  const lastDigit = Number(num.charAt(num.length - 1));
  switch (lastDigit) {
    case 0:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
      return 'рублей';
    case 1:
      return 'рубль';
    case 2:
    case 3:
    case 4:
      return 'рубля';
  }
}

function getDigitBeforeLaste(num) {
  num = String(num);

  const digit = num.charAt(num.length - 2);
  if (digit !== '') {
    return Number(digit);
  }
  return null;
}

function task_6() {
  const money = parseInt(
    prompt('Какое количество денег, Вы хотите положить в банк?')
  );
  console.log(`Вы положили на счёт ${money} ${getCase(money)}`);
}
