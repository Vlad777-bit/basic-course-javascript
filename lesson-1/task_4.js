'use strict';

function askNumberOfTicket() {
  return +prompt('Введите номер своего билета. Он должен состоять из 6 цифр');
}

function defineHappyTicket() {
  
  const userTicket = askNumberOfTicket(),
  n1 = userTicket % 10,
  n2 = Math.floor(userTicket / 10) % 10,
  n3 = Math.floor(userTicket / 100) % 10,
  n4 = Math.floor(userTicket / 1000) % 10,
  n5 = Math.floor(userTicket / 10000) % 10,
  n6 = Math.floor(userTicket / 100000) % 10;

  if (n1 + n2 + n3 === n4 + n5 + n6) {
    return 'Поздравляю у вас счастливый билет'
  } 

  return 'Увы, не повезло(';
}
