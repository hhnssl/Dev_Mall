const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const name = document.getElementById('name');
const phone_number = document.getElementById('phone_number');

// 에러 메세지 띄우기
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';

  const span = formControl.querySelector('span');
  span.innerText = message;
}

// 성공
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control';
}

// 폼 제출버튼 눌렀을 때
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const inputs = [username, password, password2, name, phone_number];
  // console.log(name.value);

  inputs.forEach((input) => {
    if (input.value === '') {
      showError(input, '필수 입력 항목입니다.');
    } else {
      showSuccess(input);
    }
  });
});
