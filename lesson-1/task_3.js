// Сначала выполниться сложение чисел, получится 20. Потом произойдёт неявное приведение к строке, и результат будет '2010'
console.log(10 + 10 + '10');

// Произойдёт приведение к строке результатом которым будет '101010'
console.log(10 + '10' + 10);

// Здесь мы строку преобразуем в число и просто складываем их, результат сложения будет 30
console.log(10 + 10 + +'10');

/* 
  Здесь тоже происходит преобразование строки, пустая строка в js это false, если false преобразовать в число то получиться 0. 
  В итоге если выполнить деление, то получиться -Infiniti 
*/
console.log(10 / -'');

// Получиться NaN, т.к. вместо запятой нужно использовать точку 
console.log(10 / +'2,5');
