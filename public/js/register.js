'use strict';

const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', async e => {
  e.preventDefault();

  const name = document.querySelector('#name-input').value;
  const email = document.querySelector('#email-input').value;
  const password = document.querySelector('#password-input').value;

  await signupUser(name, email, password);
});

const signupUser = async (name, email, password) => {
  const response = await fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password }),
    credentials: 'include',
  });

  if (response.ok) {
    alert('User signed up successfully!');

    window.location.replace('/');
  } else {
    alert('Signup failed!');
  }
};
