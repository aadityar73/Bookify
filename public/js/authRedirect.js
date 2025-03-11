'use strict';

// const checkLoginAndRedirect = async bookUrl => {
//   console.log('checkLoginAndRedirect() called with URL:', bookUrl);

//   try {
//     const response = await fetch(`${API_URL}/users/me`, {
//       method: 'GET',
//       credentials: 'include',
//     });

//     if (response.ok) {
//       window.location.href = bookUrl;
//     } else {
//       throw new Error('Not authenticated');
//     }
//   } catch (error) {
//     console.log('User not logged in, redirecting to login page...');
//     sessionStorage.setItem('redirectUrl', bookUrl);
//     window.location.href = 'login.html';
//   }
// };
