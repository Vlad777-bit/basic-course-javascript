'use strict';

const form = document.querySelector('.my-form');
const nameEl = document.querySelector('#name');
const phoneEl = document.querySelector('#phone');
const passEl = document.querySelector('#password');
const passRepeatEl = document.querySelector('#password_repeat');

form.addEventListener('submit', event => {
  const regExpName = /^[a-zA-Zа-яА-Я]{1,50}$/g;
  const regExpPhone = /^\+7\d{10}/g;
  const regExpPasswd = /^\d|\w{5,50}/g;

  if (!regExpName.test(nameEl.value)) {
    nameEl.classList.add('error');
    document.querySelector('.name').style.display = 'flex';
    event.preventDefault();
  } else {
    nameEl.classList.remove('error');
    document.querySelector('.name').style.display = 'none';
  }

  if (!regExpPhone.test(phoneEl.value)) {
    phoneEl.classList.add('error');
    document.querySelector('.phone').style.display = 'flex';
    event.preventDefault();
  } else {
    phoneEl.classList.remove('error');
    document.querySelector('.phone').style.display = 'none';
  }

  if (!regExpPasswd.test(passEl.value)) {
    passEl.classList.add('error');
    document.querySelector('.passwd').style.display = 'flex';
    event.preventDefault();
  } else {
    passEl.classList.remove('error');
    document.querySelector('.passwd').style.display = 'none';
  }

  if (passEl.value != passRepeatEl.value) {
    passRepeatEl.classList.add('error');
    document.querySelector('.passwd_rep').style.display = 'flex';
    event.preventDefault();
  } else {
    passRepeatEl.classList.remove('error');
    document.querySelector('.passwd_rep').style.display = 'none';
  }
});