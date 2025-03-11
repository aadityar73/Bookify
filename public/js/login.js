'use strict';

const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', async function (e) {
  e.preventDefault();

  const email = document.querySelector('#email-input').value;
  const password = document.querySelector('#password-input').value;

  await loginUser(email, password);
});

const loginUser = async (email, password) => {
  const response = await fetch(`${API_URL}/users/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
    credentials: 'include',
  });

  if (response.ok) {
    alert('Login successful');

    let previousPage = localStorage.getItem('previousPage');

    if (!previousPage) {
      previousPage = '/';
    }

    localStorage.removeItem('previousPage');

    window.location.replace(previousPage);
  } else {
    alert('Login failed');
  }
};
