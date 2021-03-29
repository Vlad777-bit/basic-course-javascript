'use strict';

function task_1() {
  let number = 0;

  do {
    if (number === 0) {
      console.log(`${number} - это ноль`);
    } else if (!(number % 2 === 0)) {
      console.log(`${number} - нечётное число`);
    } else {
      console.log(`${number} - чётное число`);
    }

    number++;
  } while (number <= 10);
}
