'use strict';

const form = document.querySelector('.my-form');
const btn = form.querySelector('.btn');
const input = form.querySelectorAll('input');


form.addEventListener('submit', event => {
  for (let i = 0; i < input.length; i++) {
    if (input[i].id == 'name' && !validInputName(input[i])) {
      createErrMess(input[i], 'Error length');
      createErrInput(input[i]);
      event.preventDefault();
    }

    if (input[i].id == 'phone' && !validInputPhone(input[i])) {
      createErrMess(input[i], 'Error phone');
      createErrInput(input[i]);
      event.preventDefault();
    }

    if (input[i].id == 'password' && !validInputPasswd(input[i])) {
      createErrMess(input[i], 'Error password');
      createErrInput(input[i]);
      event.preventDefault();
    }

    if (input[i].id == 'password_repeat' && !validInputPasswdRepeat(validInputPasswd(input[i]), input[i])) {
      createErrMess(input[i], 'Error password');
      createErrInput(input[i]);
      event.preventDefault();
    }
  }
})

function createErrMess(elem, text) {
  return elem.insertAdjacentHTML('afterend', `<div class="invalid-feedback flex">${text}</div>`);
}

function createErrInput(elem) {
  return elem.style.border = '2px solid red';
}

function validInputName(input) {
  if (input.value.length > 1 && input.value.length < 50) {
    return true;
  }
  return;
}

function validInputPhone(input) {
  const regExpPhone = /^\+7\d{10}/g;
  
  if (regExpPhone.test(input.value)) {
    return true;
  }
  return;
}

function validInputPasswd(input) {
  if (input.value.length > 5 && input.value.length < 50) {
    return input.value;
  }
  return;
}

function validInputPasswdRepeat(fn, input) {
  if (fn === input.value) {
    return true;
  }
  return;
}