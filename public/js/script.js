'use strict';

const currentYear = new Date().getFullYear();

document.querySelector('.year').textContent = currentYear;

document.addEventListener('DOMContentLoaded', async () => {
  const loginButton = document.querySelector('#login-btn');
  const signoutButton = document.querySelector('#signout-btn');

  async function checkAuthStatus() {
    try {
      const response = await fetch(`${API_URL}/users/me`, {
        method: 'GET',
        credentials: 'include',
      });

      if (response.ok) {
        loginButton.style.display = 'none';
        signoutButton.style.display = 'block';
      } else {
        throw new Error('Not authenticated');
      }
    } catch (error) {
      loginButton.style.display = 'block';
      signoutButton.style.display = 'none';
    }
  }

  checkAuthStatus();

  loginButton.addEventListener('click', () => {
    localStorage.setItem('previousPage', window.location.href);
    window.location.href = '/account/login';
  });

  signoutButton.addEventListener('click', async () => {
    try {
      const response = await fetch(`${API_URL}/users/logout`, {
        method: 'POST',
        credentials: 'include',
      });

      if (response.ok) {
        alert('Logged out successfully!');

        checkAuthStatus();
      } else {
        alert('Error logging out.');
      }
    } catch (error) {
      console.error('Logout failed:', error);
    }
  });
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const checkLoginAndRedirect = async bookURL => {
  try {
    const response = await fetch(`${API_URL}/users/me`, {
      method: 'GET',
      credentials: 'include',
    });

    if (response.ok) {
      window.open(bookURL, '_blank');
    } else {
      localStorage.setItem('previousPage', window.location.href);
      window.location.href = '/account/login';
    }
  } catch (error) {
    throw new Error('Please sign in to read the book');
  }
};
