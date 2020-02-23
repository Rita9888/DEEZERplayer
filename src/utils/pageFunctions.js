/* eslint-disable no-alert */
export function addForm(id) {
  document.getElementById(id).style.display = 'flex';
}

function checkLoginInfo(login, password) {
  if (login.value === '') {
    alert('Введите логин');
    return false;
  }
  if (password.value === '') {
    alert('Введите пароль');
    return false;
  }
  return true;
}

function showForm() {
  document.getElementById('form').style.display = 'none';
  document.getElementById('drop-area').style.display = 'block';
}

export function onLoginClick() {
  const login = document.getElementsByClassName('login')[0];
  const password = document.getElementsByClassName('password')[0];
  if (checkLoginInfo(login.value, password.value)) {
    showForm();
  }
}
