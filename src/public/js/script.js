'use strict';

// Set current year
document.querySelector('.year').textContent = new Date().getFullYear();

///////////////////////////////////////////////////////////
// Make mobile navigation work
const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});

///////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', async () => {
  const loginButton = document.querySelector('#login-btn');
  const signoutButton = document.querySelector('#signout-btn');

  // Function to check the user's authentication status
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

  // Handle login button click: store previous page and redirect to login page
  loginButton.addEventListener('click', () => {
    localStorage.setItem('previousPage', window.location.href);
    window.location.href = '/account/login';
  });

  // Handle signout button click: send logout request to server
  signoutButton.addEventListener('click', async () => {
    try {
      const response = await fetch(`${API_URL}/users/logout`, {
        method: 'POST',
        credentials: 'include',
      });

      if (response.ok) {
        alert('Logged out successfully!');

        // Recheck authentication status after logout
        checkAuthStatus();
      } else {
        alert('Error logging out.');
      }
    } catch (error) {
      console.error('Logout failed:', error);
    }
  });
});

///////////////////////////////////////////////////////////
// Function to check if the user is logged in and allow reading the book if they are
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
