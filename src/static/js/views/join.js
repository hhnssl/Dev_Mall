const form = document.getElementById('form');
// input 요소
const id = document.getElementById('username');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password2');
const name = document.getElementById('name');
const phoneNumber1 = document.querySelector('.phone-number1');
const phoneNumber2 = document.querySelector('.phone-number2');
const phoneNumber3 = document.querySelector('.phone-number3');
const email1 = document.querySelector('.email1');
const email2 = document.querySelector('.email2');

id.addEventListener('blur', (e) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const formControl = id.parentElement.parentElement;
  // console.log(id.value);

  if (id.value === '') {
    // console.log('값이 비었네');
    formControl.classList = error;
  }
});
