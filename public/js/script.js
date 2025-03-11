'use strict';

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
