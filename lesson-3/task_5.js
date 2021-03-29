'use strict';

const arr = [
  [2, 4, 6],
  [1, 5, 10],
  [7, 4, 1],
];

/**
 * Функция возвращает сумму элементов массива
 * @param {number[]} arr Массив, сумма элементовкоторого вернёт функция
 * @returns {number} Сумма элементов массива
 */
function getSumOfElements(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

let maxSumOfArrayIndex = 0;
let maxSumOfArray = getSumOfElements(arr[maxSumOfArrayIndex]);
let minNumber = 9999999999;

for (let i = 1; i < arr.length; i++) {
  if (getSumOfElements(arr[i]) > maxSumOfArray) {
    maxSumOfArrayIndex = i;
    maxSumOfArray = getSumOfElements(arr[i]);
  }
}

for (let val of arr[maxSumOfArrayIndex]) {
  if (val < minNumber) {
    minNumber = val;
  }
}

function task_5() {
  console.log(
    `Индекс массива, с максимальным значением: ${maxSumOfArrayIndex}`
  );
  console.log(`Минимальное значение, в найденном массиве: ${minNumber}`);
}
