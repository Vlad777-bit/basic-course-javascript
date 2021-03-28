'use strict';

let num = 0;

function task_4() {
  while (num < 100) {
    if (isPrimeNumber(num)) { 
      console.log(num);
    }
    num++;
  }
}

/**
 * Функция проверяет, является ли число простым
 * @param {number} Пробрасывается число для проверки  
 * @returns {boolean} возвращает true, если число является простым, иначе false
 */
function isPrimeNumber(n) {
  if (n === 1 || n === 0) {
    return false;
  } else {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
}